import { View, Text, SectionList, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../src/theme/colors';
import { NotificationItem } from '../src/components/notificacoes/NotificationItem';
import { mockNotificationSections } from '../src/mock/notificacoesMock';

export default function NotificacoesScreen() {
  const insets = useSafeAreaInsets();
  const unreadCount = mockNotificationSections
    .flatMap((section) => section.data)
    .filter((item) => !item.read).length;

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </Pressable>
        <Text style={styles.title}>Notificações</Text>
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
      </View>

      <SectionList
        sections={mockNotificationSections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.listContent, { paddingBottom: insets.bottom + 32 }]}
        renderSectionHeader={({ section }) => <Text style={styles.sectionTitle}>{section.title}</Text>}
        renderItem={({ item }) => <NotificationItem {...item} />}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20, paddingBottom: 4 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800' },
  badge: {
    backgroundColor: colors.accent, borderRadius: 10, minWidth: 20, height: 20,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
  },
  badgeText: { color: colors.accentText, fontSize: 12, fontWeight: '700' },
  listContent: { paddingHorizontal: 20 },
  sectionTitle: { color: colors.text, fontSize: 14, fontWeight: '800', marginTop: 16, marginBottom: 6 },
});