import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function CommentItem({ autor, texto, tempo }) {
  return (
    <View style={styles.row}>
      <View style={styles.avatarWrapper}>
        <Ionicons name="person-outline" size={20} color={colors.accent} />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.headerRow}>
          <Text style={styles.autor}>{autor}</Text>
          <Text style={styles.tempo}>{tempo}</Text>
        </View>
        <Text style={styles.texto}>{texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, paddingVertical: 14, alignItems: 'flex-start' },
  avatarWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: { flex: 1, gap: 2 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  autor: { color: colors.text, fontSize: typography.fontSize.xl, fontFamily: typography.fontFamily.semiBold },
  tempo: { color: colors.textMuted, fontSize: typography.fontSize.sm, fontFamily: typography.fontFamily.regular },
  texto: { color: colors.text, fontSize: typography.fontSize.lg, fontFamily: typography.fontFamily.regular, marginTop: 4, lineHeight: 18 },
});