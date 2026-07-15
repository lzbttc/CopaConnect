import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export function NotificationItem({ icon, title, description, time, read }) {
  return (
    <View style={styles.row}>
      {!read && <View style={styles.unreadDot} />}
      <View style={[styles.iconWrapper, read && styles.iconWrapperRead]}>
        <Ionicons name={icon} size={18} color={colors.accent} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 12 },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.accent, marginTop: 8 },
  iconWrapper: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: colors.cardBg,
    alignItems: 'center', justifyContent: 'center',
  },
  iconWrapperRead: { opacity: 0.6 },
  textWrapper: { flex: 1 },
  title: { color: colors.text, fontSize: 14, fontWeight: '700' },
  description: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
  time: { color: colors.textMuted, fontSize: 11, marginTop: 4 },
});