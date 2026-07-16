import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../src/theme/colors';
import { HomeHeader } from '../../src/components/home/HomeHeader';
import { MatchCard } from '../../src/components/home/MatchCard';
import { BolaoCard, EmptyBolaoCard } from '../../src/components/home/BolaoCard';
import { FriendsOnline } from '../../src/components/home/FriendsOnline';
import {
  mockMatch, mockBoloes, mockFriendsOnline, mockFriendsExtraCount, mockNotificationsCount,
} from '../../src/mock/homeMock';

export default function HomeScreen() {
  const isAgendada = mockMatch.status === 'agendada';
  const hasBoloes = mockBoloes.length > 0;

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <HomeHeader notificationsCount={mockNotificationsCount} />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sectionTitle}>Partida ao Vivo</Text>
        <MatchCard match={mockMatch} />

        <Text style={styles.sectionTitle}>Meus Bolões</Text>
        {hasBoloes
          ? mockBoloes.map((bolao) => <BolaoCard key={bolao.id} bolao={bolao} />)
          : <EmptyBolaoCard />}

        {isAgendada && (
          <Pressable
            style={styles.createButton}
            onPress={() => console.log('TODO: tela de criação de bolão ainda não definida')}
          >
            <Text style={styles.createButtonText}>Criar novo bolão +</Text>
          </Pressable>
        )}

        <Text style={styles.sectionTitle}>Amigos Online</Text>
        <FriendsOnline friends={mockFriendsOnline} extraCount={mockFriendsExtraCount} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scroll: { paddingHorizontal: 20, paddingBottom: 110, gap: 4 },
  sectionTitle: { color: colors.text, fontSize: 16, fontWeight: '800', marginTop: 20, marginBottom: 10 },
  createButton: {
    backgroundColor: colors.accent, borderRadius: 28, paddingVertical: 15,
    alignItems: 'center', marginTop: 4, marginBottom: 4,
  },
  createButtonText: { color: colors.accentText, fontSize: 15, fontWeight: '700' },
});