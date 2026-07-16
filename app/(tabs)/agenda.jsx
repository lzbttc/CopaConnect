import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';
import { typography } from '../../src/theme/typography';
import { ScreenBackground } from '../../src/components/common/ScreenBackground';
import { DateSelector } from '../../src/components/agenda/DateSelector';
import { MatchCard } from '../../src/components/home/MatchCard';
import { mockDates, mockAgendaSections } from '../../src/mock/agendaMock';

export default function AgendaScreen() {
  const insets = useSafeAreaInsets();
  const [selectedKey, setSelectedKey] = useState('14-jun');

  const currentSection = mockAgendaSections.find((s) => s.dateKey === selectedKey);
  const currentMatches = currentSection ? currentSection.data : [];

  return (
    <ScreenBackground>
      <Text style={[styles.title, { paddingTop: insets.top + 16 }]}>Agenda de Partidas</Text>

      <DateSelector dates={mockDates} selectedKey={selectedKey} onSelect={setSelectedKey} />

      <FlatList
        data={currentMatches}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <MatchCard match={item} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhuma partida agendada para este dia</Text>
          </View>
        }
      />
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: typography.fontSize['4xl'],
    fontFamily: typography.fontFamily.brand,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  cardWrapper: {
    marginBottom: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: typography.fontSize.xl,
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
  },
});