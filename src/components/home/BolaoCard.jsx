import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function BolaoCard({ bolao }) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.nome}>{bolao.nome}</Text>
        <Text style={styles.posicao}>{bolao.posicao}º/{bolao.totalParticipantes}</Text>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.palpite}>
          Palpite: <Text style={styles.palpiteValue}>{bolao.palpite}</Text>
        </Text>
        <Text style={styles.pontos}>{bolao.pontos} pts</Text>
      </View>
    </View>
  );
}

export function EmptyBolaoCard() {
  return (
    <View style={[styles.card, styles.emptyCard]}>
      <Text style={styles.emptyText}>Você não fez nenhum bolão{'\n'}para essa partida</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    padding: 16,
    marginBottom: 10,
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 },
  nome: { color: colors.text, fontSize: typography.fontSize['2xl'], fontFamily: typography.fontFamily.semiBold },
  posicao: { color: colors.text, fontSize: typography.fontSize.lg, fontFamily: typography.fontFamily.semiBold },
  palpite: { color: colors.textMuted, fontSize: typography.fontSize.lg, fontFamily: typography.fontFamily.regular },
  palpiteValue: { color: colors.text, fontFamily: typography.fontFamily.semiBold },
  pontos: { color: colors.text, fontSize: typography.fontSize.lg, fontFamily: typography.fontFamily.semiBold },
  emptyCard: { alignItems: 'center', justifyContent: 'center', paddingVertical: 24 },
  emptyText: { color: colors.textMuted, textAlign: 'center', fontSize: typography.fontSize.xl, fontFamily: typography.fontFamily.regular, lineHeight: 22 },
});