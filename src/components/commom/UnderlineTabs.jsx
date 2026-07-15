import { View, Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

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
  container: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.border },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 14 },
  label: { color: colors.textMuted, fontSize: 15, fontWeight: '700' },
  labelActive: { color: colors.text },
  underline: { height: 3, backgroundColor: colors.accent, width: '60%', marginTop: 8, borderRadius: 2 },
});