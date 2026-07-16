import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable, StyleSheet, Keyboard, Platform } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';
import { ScreenBackground } from '../../src/components/common/ScreenBackground';
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
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('comentarios');
  const [comments, setComments] = useState(mockComments);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => setKeyboardHeight(e.endCoordinates.height)
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setKeyboardHeight(0)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  function handleSendComment(texto) {
    setComments((prev) => [{ id: `local-${Date.now()}`, autor: 'Você', texto, tempo: 'Agora' }, ...prev]);
  }

  const keyboardOffset = keyboardHeight > 0 ? keyboardHeight + Platform.select({ ios: 16, android: 48 }) : 0;

  return (
    <ScreenBackground>
      <View style={[styles.flex, { paddingBottom: keyboardOffset }]}>
        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => router.back()}
            style={[styles.backButton, { top: insets.top + 8 }]}
            hitSlop={12}
          >
            <Ionicons name="chevron-back" size={28} color={colors.accent} />
          </Pressable>

          <View style={[styles.headerWrapper, { paddingTop: insets.top + 14 }]}>
            <MatchCard match={mockMatch} bare />
          </View>
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
          <View style={{ paddingBottom: keyboardOffset > 0 ? 0 : insets.bottom }}>
            <CommentInput onSend={handleSendComment} />
          </View>
        )}
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  headerContainer: { position: 'relative' },
  backButton: { position: 'absolute', left: 16, zIndex: 10 },
  headerWrapper: { paddingHorizontal: 20 },
  listContent: { paddingHorizontal: 20, paddingVertical: 12 },
});