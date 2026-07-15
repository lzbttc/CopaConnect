import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export function DateSelector({ dates, selectedKey, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
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
  container: { gap: 10, paddingHorizontal: 20, paddingVertical: 12 },
  pill: {
    width: 56, height: 64, borderRadius: 32,
    borderWidth: 1.5, borderColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  pillSelected: { backgroundColor: colors.accent, borderColor: colors.accent },
  day: { color: colors.text, fontSize: 16, fontWeight: '800' },
  month: { color: colors.textMuted, fontSize: 11, fontWeight: '600' },
  textSelected: { color: colors.accentText },
});