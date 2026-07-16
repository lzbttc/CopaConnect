import { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export function AuthInput({
  value, onChangeText, placeholder, icon, isPassword,
  keyboardType = 'default', maxLength, error,
}) {
  const [hidden, setHidden] = useState(!!isPassword);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.inputRow, error && styles.inputError]}>
        <Ionicons name={icon} size={18} color={colors.placeholder} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidden}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCapitalize={keyboardType === 'email-address' ? 'none' : 'sentences'}
          autoCorrect={false}
          accessibilityLabel={placeholder}
        />
        {isPassword && (
          <Pressable
            onPress={() => setHidden((h) => !h)}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={hidden ? 'Mostrar senha' : 'Ocultar senha'}
          >
            <Ionicons name={hidden ? 'eye-outline' : 'eye-off-outline'} size={18} color={colors.placeholder} />
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  inputRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    borderWidth: 1, borderColor: colors.border, borderRadius: 14,
    paddingHorizontal: 16, paddingVertical: 14,
    backgroundColor: colors.inputBg,
  },
  inputError: { borderColor: colors.error },
  input: { flex: 1, color: colors.text, fontSize: typography.fontSize.xl, fontFamily: typography.fontFamily.regular },
  errorText: { color: colors.error, fontSize: typography.fontSize.base, fontFamily: typography.fontFamily.regular, marginTop: 4, marginLeft: 4 },
});