import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function EventItem({ minute, title, description, team }) {
  return (
    <View style={styles.row}>
      <Text style={styles.minute}>{minute}</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.team}>{team}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, paddingVertical: 14, alignItems: 'flex-start' },
  minute: { color: colors.textMuted, fontSize: typography.fontSize.lg, fontFamily: typography.fontFamily.regular, width: 36 },
  textWrapper: { flex: 1, gap: 2 },
  title: { color: colors.text, fontSize: typography.fontSize.xl, fontFamily: typography.fontFamily.semiBold },
  description: { color: colors.textMuted, fontSize: typography.fontSize.lg, fontFamily: typography.fontFamily.regular, marginTop: 2, lineHeight: 16 },
  team: { color: colors.text, fontSize: typography.fontSize.xl, fontFamily: typography.fontFamily.semiBold },
});