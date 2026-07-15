import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

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
  card: { backgroundColor: colors.cardBg, borderRadius: 14, padding: 16, marginBottom: 10 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 },
  nome: { color: colors.text, fontSize: 16, fontWeight: '700' },
  posicao: { color: colors.text, fontSize: 13, fontWeight: '700' },
  palpite: { color: colors.textMuted, fontSize: 12 },
  palpiteValue: { color: colors.text, fontWeight: '700' },
  pontos: { color: colors.text, fontSize: 13, fontWeight: '700' },
  emptyCard: { alignItems: 'center', justifyContent: 'center', paddingVertical: 24 },
  emptyText: { color: colors.textMuted, textAlign: 'center', fontSize: 13 },
});