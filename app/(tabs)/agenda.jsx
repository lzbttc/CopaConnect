import { useRef, useState, useCallback } from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';
import { DateSelector } from '../../src/components/agenda/DateSelector';
import { MatchCard } from '../../src/components/home/MatchCard';
import { mockDates, mockAgendaSections } from '../../src/mock/agendaMock';

export default function AgendaScreen() {
  const insets = useSafeAreaInsets();
  const [selectedKey, setSelectedKey] = useState('14-jun');
  const sectionListRef = useRef(null);

  const handleSelectDate = useCallback((key) => {
    setSelectedKey(key);
    const sectionIndex = mockAgendaSections.findIndex((s) => s.dateKey === key);
    if (sectionIndex === -1) return;

    sectionListRef.current?.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
      viewOffset: 12,
      animated: true,
    });
  }, []);

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <Text style={[styles.title, { paddingTop: insets.top + 16 }]}>Agenda de Partidas</Text>

      <DateSelector dates={mockDates} selectedKey={selectedKey} onSelect={handleSelectDate} />

      <SectionList
        ref={sectionListRef}
        sections={mockAgendaSections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        onScrollToIndexFailed={() => {}}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <MatchCard match={item} />
          </View>
        )}
        renderSectionFooter={({ section }) =>
          section.data.length === 0 ? (
            <Text style={styles.emptyText}>Nenhuma partida agendada para este dia</Text>
          ) : null
        }
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800', paddingHorizontal: 20 },
  listContent: { paddingHorizontal: 20, paddingBottom: 110 },
  sectionTitle: { color: colors.text, fontSize: 14, fontWeight: '700', marginTop: 18, marginBottom: 10 },
  cardWrapper: { marginBottom: 12 },
  emptyText: { color: colors.textMuted, fontSize: 12, marginBottom: 6 },
});