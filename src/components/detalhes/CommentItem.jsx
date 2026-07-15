import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export function CommentItem({ autor, texto, tempo }) {
  return (
    <View style={styles.row}>
      <Ionicons name="person-circle-outline" size={36} color={colors.textMuted} />
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
  row: { flexDirection: 'row', gap: 12, paddingVertical: 14 },
  textWrapper: { flex: 1 },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  autor: { color: colors.text, fontSize: 14, fontWeight: '700' },
  tempo: { color: colors.textMuted, fontSize: 12 },
  texto: { color: colors.text, fontSize: 13, marginTop: 2, opacity: 0.9 },
});