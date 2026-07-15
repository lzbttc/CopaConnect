import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

export function AuthButton({ label, onPress, loading }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [styles.button, loading && styles.disabled, pressed && styles.pressed]}
    >
      {loading ? <ActivityIndicator color={colors.accentText} /> : <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: colors.accent, borderRadius: 28, paddingVertical: 16, alignItems: 'center' },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.5 },
  label: { color: colors.accentText, fontSize: 16, fontWeight: '700' },
});