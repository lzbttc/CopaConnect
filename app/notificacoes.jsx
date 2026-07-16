import React from 'react';
import { View, Text, SectionList, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../src/theme/colors';
import { typography } from '../src/theme/typography';
import { ScreenBackground } from '../src/components/common/ScreenBackground';
import { NotificationItem } from '../src/components/notificacoes/NotificationItem';
import { mockNotificationSections } from '../src/mock/notificacoesMock';

export default function NotificacoesScreen() {
  const insets = useSafeAreaInsets();
  const unreadCount = mockNotificationSections
    .flatMap((section) => section.data)
    .filter((item) => !item.read).length;

  return (
    <ScreenBackground>
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={colors.accent} />
        </Pressable>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Notificações</Text>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
      </View>

      <SectionList
        sections={mockNotificationSections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.listContent, { paddingBottom: insets.bottom + 32 }]}
        renderSectionHeader={({ section }) => <Text style={styles.sectionTitle}>{section.title}</Text>}
        renderItem={({ item }) => <NotificationItem {...item} />}
      />
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  backButton: {
    marginRight: 6,
    marginLeft: -8, // visually align chevron with the container edge
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: colors.text,
    fontSize: typography.fontSize['4xl'],
    fontFamily: typography.fontFamily.brand,
  },
  badge: {
    backgroundColor: colors.accent,
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.accentText,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.semiBold,
    textAlign: 'center',
  },
  listContent: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: typography.fontSize['3xl'],
    fontFamily: typography.fontFamily.brand,
    marginTop: 24,
    marginBottom: 8,
    letterSpacing: 1,
  },
});