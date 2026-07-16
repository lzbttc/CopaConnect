import React, { useMemo, useState, useCallback } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';
import { FriendsTabBar } from '../../src/components/amigos/FriendsTabBar';
import { SearchBar } from '../../src/components/amigos/SearchBar';
import { ConversationItem } from '../../src/components/amigos/ConversationItem';
import { RequestItem } from '../../src/components/amigos/RequestItem';
import { FriendItem } from '../../src/components/amigos/FriendItem';
import { mockConversations, mockRequests, mockFriends } from '../../src/mock/amigosMock';

function normalize(text) {
  return (text ?? '').toLowerCase().trim();
}

export default function AmigosScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('conversas');
  const [search, setSearch] = useState('');
  const [requests, setRequests] = useState(mockRequests ?? []);

  // Stable callbacks for actions
  const handleAccept = useCallback((id) => {
    // TODO(backend): confirmar aceite do convite via API
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const handleDecline = useCallback((id) => {
    // TODO(backend): confirmar recusa do convite via API
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }, []);

  // Memoized data filtering with optional chaining safety
  const filteredData = useMemo(() => {
    const query = normalize(search);
    const source = activeTab === 'conversas' ? (mockConversations ?? [])
      : activeTab === 'solicitacoes' ? (requests ?? [])
      : (mockFriends ?? []);

    if (!query) return source;
    return source.filter((item) => normalize(item?.nome).includes(query));
  }, [activeTab, search, requests]);

  // Memoized renderItem to prevent child re-renders
  const renderItem = useCallback(({ item }) => {
    if (!item) return null;

    if (activeTab === 'conversas') {
      return (
        <ConversationItem
          friendId={item.friendId}
          nome={item.nome}
          online={item.online}
          lastMessage={item.lastMessage}
          time={item.time}
        />
      );
    }
    if (activeTab === 'solicitacoes') {
      return (
        <RequestItem
          friendId={item.friendId}
          nome={item.nome}
          online={item.online}
          time={item.time}
          onAccept={() => handleAccept(item.id)}
          onDecline={() => handleDecline(item.id)}
        />
      );
    }
    return (
      <FriendItem
        friendId={item.friendId}
        nome={item.nome}
        online={item.online}
      />
    );
  }, [activeTab, handleAccept, handleDecline]);

  // Stable key extractor
  const keyExtractor = useCallback((item) => item?.id?.toString() ?? Math.random().toString(), []);

  // Memoized empty state component
  const ListEmptyComponent = useMemo(() => (
    <Text style={styles.emptyText}>Nenhum resultado encontrado</Text>
  ), []);

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <Text style={[styles.title, { paddingTop: insets.top + 16 }]}>Amigos</Text>

      <FriendsTabBar active={activeTab} onChange={setActiveTab} requestsCount={requests.length} />

      <SearchBar value={search} onChangeText={setSearch} />

      <FlatList
        data={filteredData}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800', paddingHorizontal: 20, marginBottom: 4 },
  listContent: { paddingHorizontal: 20, paddingBottom: 110 },
  emptyText: { color: colors.textMuted, fontSize: 13, textAlign: 'center', marginTop: 24 },
});