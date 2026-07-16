import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function DateSelector({ dates, selectedKey, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.scroll}
    >
      {dates.map((item) => {
        const isSelected = item.key === selectedKey;
        return (
          <Pressable
            key={item.key}
            onPress={() => onSelect(item.key)}
            style={[styles.pill, isSelected && styles.pillSelected]}
          >
            <Text style={[styles.day, isSelected && styles.textSelected]}>{item.day}</Text>
            <Text style={[styles.month, isSelected && styles.textSelected]}>{item.month}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 0, overflow: 'visible', marginBottom: 12 },
  container: { gap: 12, paddingHorizontal: 20, paddingVertical: 12 },
  pill: {
    width: 58,
    height: 80,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  pillSelected: { backgroundColor: colors.accent, borderColor: colors.accent },
  day: { color: colors.text, fontSize: typography.fontSize['3xl'], fontFamily: typography.fontFamily.brand },
  month: { color: colors.text, fontSize: typography.fontSize.base, fontFamily: typography.fontFamily.brand, marginTop: 2 },
  textSelected: { color: colors.accentText },
});