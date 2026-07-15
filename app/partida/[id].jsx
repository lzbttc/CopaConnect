import { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';
import { MatchCard } from '../../src/components/home/MatchCard';
import { UnderlineTabs } from '../../src/components/commom/UnderlineTabs';
import { CommentItem } from '../../src/components/detalhes/CommentItem';
import { EventItem } from '../../src/components/detalhes/EventItem';
import { CommentInput } from '../../src/components/detalhes/CommentInput';
import { mockMatch, mockComments, mockEvents } from '../../src/mock/detalhesMock';

const TABS = [
  { key: 'comentarios', label: 'Comentários' },
  { key: 'eventos', label: 'Eventos' },
];

export default function MatchDetailsScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams(); // TODO(backend): usar id pra buscar a partida real
  const [activeTab, setActiveTab] = useState('comentarios');
  const [comments, setComments] = useState(mockComments);

  function handleSendComment(texto) {
    setComments((prev) => [{ id: `local-${Date.now()}`, autor: 'Você', texto, tempo: 'Agora' }, ...prev]);
  }

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backButton, { paddingTop: insets.top + 16 }]}
          hitSlop={12}
        >
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </Pressable>

        <View style={styles.headerWrapper}>
          <MatchCard match={mockMatch} bare />
        </View>

        <UnderlineTabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

        {activeTab === 'comentarios' ? (
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => <CommentItem {...item} />}
          />
        ) : (
          <FlatList
            data={mockEvents}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => <EventItem {...item} />}
          />
        )}

        {activeTab === 'comentarios' && (
          <View style={{ paddingBottom: insets.bottom }}>
            <CommentInput onSend={handleSendComment} />
          </View>
        )}
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  backButton: { paddingHorizontal: 20 },
  headerWrapper: { paddingHorizontal: 20 },
  listContent: { paddingHorizontal: 20, paddingBottom: 12 },
});