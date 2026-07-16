import React, { useMemo, useState, useCallback } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';
import { typography } from '../../src/theme/typography';
import { ScreenBackground } from '../../src/components/common/ScreenBackground';
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
  const [friendsList, setFriendsList] = useState(mockFriends ?? []);

  const totalUnreadCount = useMemo(() => {
    return mockConversations.reduce((sum, chat) => sum + (chat.unreadCount || 0), 0);
  }, []);

  const handleAccept = useCallback((id) => {
    const acceptedRequest = requests.find((r) => r.id === id);
    if (acceptedRequest) {
      setFriendsList((prev) => [
        ...prev,
        {
          id: `friend-${Date.now()}`,
          friendId: acceptedRequest.friendId,
          nome: acceptedRequest.nome,
          online: acceptedRequest.online,
        }
      ]);
    }
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }, [requests]);

  const handleDecline = useCallback((id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const filteredData = useMemo(() => {
    const query = normalize(search);
    const source = activeTab === 'conversas' ? (mockConversations ?? [])
      : activeTab === 'solicitacoes' ? (requests ?? [])
      : (friendsList ?? []);

    if (!query) return source;
    return source.filter((item) => normalize(item?.nome).includes(query));
  }, [activeTab, search, requests, friendsList]);

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
          unreadCount={item.unreadCount}
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

  const keyExtractor = useCallback((item) => item?.id?.toString() ?? Math.random().toString(), []);

  const ListEmptyComponent = useMemo(() => (
    <Text style={styles.emptyText}>Nenhum resultado encontrado</Text>
  ), []);

  return (
    <ScreenBackground>
      <Text style={[styles.title, { paddingTop: insets.top + 16 }]}>Amigos</Text>

      <FriendsTabBar
        active={activeTab}
        onChange={setActiveTab}
        requestsCount={requests.length}
        unreadCount={totalUnreadCount}
      />

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
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: typography.fontSize['4xl'],
    fontFamily: typography.fontFamily.brand,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  listContent: { paddingHorizontal: 20, paddingBottom: 110 },
  emptyText: { color: colors.textMuted, fontSize: typography.fontSize.lg, fontFamily: typography.fontFamily.regular, textAlign: 'center', marginTop: 24 },
});