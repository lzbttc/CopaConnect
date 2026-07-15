import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color={colors.placeholder} />
      <TextInput
        style={styles.input}
        placeholder="Pesquise por nome, email ou telefone..."
        placeholderTextColor={colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    borderWidth: 1, borderColor: colors.border, borderRadius: 14,
    paddingHorizontal: 16, paddingVertical: 12,
    marginHorizontal: 20, marginBottom: 16, backgroundColor: colors.inputBg,
  },
  input: { flex: 1, color: colors.text, fontSize: 14 },
});