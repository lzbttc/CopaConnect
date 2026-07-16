import { View, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const TABS = [
  { key: 'conversas', label: 'Conversas' },
  { key: 'solicitacoes', label: 'Solicitações' },
  { key: 'amigos', label: 'Meus Amigos' },
];

export function FriendsTabBar({ active, onChange, requestsCount = 0, unreadCount = 0 }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.pill, isActive && styles.pillActive]}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
            {tab.key === 'conversas' && unreadCount > 0 && (
              <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeInactive]}>
                <Text style={[styles.badgeText, isActive ? styles.badgeTextActive : styles.badgeTextInactive]}>
                  {unreadCount}
                </Text>
              </View>
            )}
            {tab.key === 'solicitacoes' && requestsCount > 0 && (
              <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeInactive]}>
                <Text style={[styles.badgeText, isActive ? styles.badgeTextActive : styles.badgeTextInactive]}>
                  {requestsCount}
                </Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 8, paddingHorizontal: 20, paddingBottom: 12 },
  pill: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 8,
  },
  pillActive: { backgroundColor: colors.accent, borderColor: colors.accent },
  label: { color: colors.accent, fontSize: typography.fontSize.sm, fontFamily: typography.fontFamily.brand, letterSpacing: 0.5 },
  labelActive: { color: colors.accentText },
  badge: {
    borderRadius: 8, minWidth: 16, height: 16,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4,
  },
  badgeActive: { backgroundColor: '#0A1930' },
  badgeInactive: { backgroundColor: colors.accent },
  badgeText: { fontSize: 10, fontWeight: '700' },
  badgeTextActive: { color: colors.accent },
  badgeTextInactive: { color: colors.accentText },
});