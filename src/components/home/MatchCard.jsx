import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../theme/colors';

const STATUS_LABEL = {
  agendada: 'Agendada',
  ao_vivo: 'Ao Vivo',
  finalizada: 'Finalizada',
};

export function MatchCard({ match, bare = false }) {
  const { id, competition, group, status, date, time, minute, teamA, teamB } = match;
  const showScore = status !== 'agendada';

  return (
    <Pressable
      style={bare ? styles.cardBare : styles.card}
      onPress={() => router.push(`/partida/${id}`)}
      disabled={bare}
    >
      <Text style={styles.competition}>{competition} | {group}</Text>

      <View style={styles.row}>
        <View style={styles.team}>
          <Text style={styles.flag}>{teamA.flag}</Text>
          <Text style={styles.teamName}>{teamA.name}</Text>
        </View>

        <View style={styles.center}>
          {showScore ? (
            <Text style={styles.score}>{teamA.score} - {teamB.score}</Text>
          ) : (
            <Text style={styles.score}>-</Text>
          )}

          {status === 'ao_vivo' && (
            <View style={styles.liveRow}>
              <View style={styles.liveDot} />
              <Text style={styles.statusText}>{STATUS_LABEL[status]}</Text>
            </View>
          )}
          {status !== 'ao_vivo' && <Text style={styles.statusText}>{STATUS_LABEL[status]}</Text>}

          <Text style={styles.subText}>{status === 'ao_vivo' ? `${minute}'` : `${date} | ${time}`}</Text>
        </View>

        <View style={styles.team}>
          <Text style={styles.flag}>{teamB.flag}</Text>
          <Text style={styles.teamName}>{teamB.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.cardBg, borderRadius: 16, padding: 16 },
  cardBare: { paddingHorizontal: 4, paddingTop: 4, paddingBottom: 16 },
  competition: { color: colors.textMuted, fontSize: 12, textAlign: 'center', marginBottom: 14 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  team: { flex: 1, alignItems: 'center', gap: 6 },
  flag: { fontSize: 32 },
  teamName: { color: colors.text, fontSize: 13, fontWeight: '600' },
  center: { flex: 1, alignItems: 'center', gap: 4 },
  score: { color: colors.text, fontSize: 26, fontWeight: '800' },
  liveRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  liveDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.live },
  statusText: { color: colors.textMuted, fontSize: 12 },
  subText: { color: colors.textMuted, fontSize: 11 },
});