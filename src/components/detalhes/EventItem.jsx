import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

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
  minute: { color: colors.textMuted, fontSize: 13, width: 32 },
  textWrapper: { flex: 1 },
  title: { color: colors.text, fontSize: 14, fontWeight: '700' },
  description: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
  team: { color: colors.text, fontSize: 12, fontWeight: '700' },
});