import { View, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const TABS = [
  { key: 'conversas', label: 'Conversas' },
  { key: 'solicitacoes', label: 'Solicitações' },
  { key: 'amigos', label: 'Meus Amigos' },
];

export function FriendsTabBar({ active, onChange, requestsCount = 0 }) {
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
            {tab.key === 'solicitacoes' && requestsCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{requestsCount}</Text>
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
    borderWidth: 1.5, borderColor: colors.border, borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 8,
  },
  pillActive: { backgroundColor: colors.accent, borderColor: colors.accent },
  label: { color: colors.text, fontSize: 12, fontWeight: '700' },
  labelActive: { color: colors.accentText },
  badge: {
    backgroundColor: colors.live, borderRadius: 8, minWidth: 16, height: 16,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 3,
  },
  badgeText: { color: colors.text, fontSize: 10, fontWeight: '700' },
});