import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../../src/theme/colors';
import { typography } from '../../src/theme/typography';
import { ScreenBackground } from '../../src/components/common/ScreenBackground';
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

  const getMatchTitle = () => {
    if (mockMatch.status === 'ao_vivo') return 'Partida Ao Vivo';
    if (mockMatch.status === 'finalizada') return 'Partida Finalizada';
    return 'Partida Agendada';
  };

  return (
    <ScreenBackground>
      <HomeHeader notificationsCount={mockNotificationsCount} />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sectionTitle}>{getMatchTitle()}</Text>
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
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingHorizontal: 20, paddingBottom: 110, gap: 4 },
  sectionTitle: {
    color: colors.text,
    fontSize: typography.fontSize['3xl'],
    fontFamily: typography.fontFamily.brand,
    marginTop: 20,
    marginBottom: 10,
    letterSpacing: 1,
  },
  createButton: {
    backgroundColor: colors.accent,
    borderRadius: 28,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  createButtonText: {
    color: colors.accentText,
    fontSize: typography.fontSize.xl,
    fontFamily: typography.fontFamily.semiBold,
  },
});