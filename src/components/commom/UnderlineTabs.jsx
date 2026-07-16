import { View, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function UnderlineTabs({ tabs, active, onChange }) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Pressable key={tab.key} style={styles.tab} onPress={() => onChange(tab.key)}>
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
            {isActive && <View style={styles.underline} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(255, 255, 255, 0.15)' },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 18, position: 'relative' },
  label: { color: colors.textMuted, fontSize: typography.fontSize['3xl'], fontFamily: typography.fontFamily.brand, letterSpacing: 0.5 },
  labelActive: { color: colors.text },
  underline: { height: 3, backgroundColor: colors.accent, width: '100%', position: 'absolute', bottom: 0 },
});