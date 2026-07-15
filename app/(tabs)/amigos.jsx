import { useMemo, useState } from 'react';
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
  return text.toLowerCase().trim();
}

export default function AmigosScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('conversas');
  const [search, setSearch] = useState('');
  const [requests, setRequests] = useState(mockRequests);

  function handleAccept(id) {
    // TODO(backend): confirmar aceite do convite via API
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }

  function handleDecline(id) {
    // TODO(backend): confirmar recusa do convite via API
    setRequests((prev) => prev.filter((r) => r.id !== id));
  }

  const filteredData = useMemo(() => {
    const query = normalize(search);
    const source = activeTab === 'conversas' ? mockConversations
      : activeTab === 'solicitacoes' ? requests
      : mockFriends;

    if (!query) return source;
    return source.filter((item) => normalize(item.nome).includes(query));
  }, [activeTab, search, requests]);

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <Text style={[styles.title, { paddingTop: insets.top + 16 }]}>Amigos</Text>

      <FriendsTabBar active={activeTab} onChange={setActiveTab} requestsCount={requests.length} />

      <SearchBar value={search} onChangeText={setSearch} />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum resultado encontrado</Text>}
        renderItem={({ item }) => {
          if (activeTab === 'conversas') return <ConversationItem {...item} />;
          if (activeTab === 'solicitacoes') {
            return (
              <RequestItem
                {...item}
                onAccept={() => handleAccept(item.id)}
                onDecline={() => handleDecline(item.id)}
              />
            );
          }
          return <FriendItem {...item} />;
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800', paddingHorizontal: 20, marginBottom: 4 },
  listContent: { paddingHorizontal: 20, paddingBottom: 32 },
  emptyText: { color: colors.textMuted, fontSize: 13, textAlign: 'center', marginTop: 24 },
});