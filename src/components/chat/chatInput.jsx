import { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export function ChatInput({ onSend }) {
  const [text, setText] = useState('');

  function handleSend() {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed); // TODO(backend): enviar mensagem via API/WebSocket
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escreva uma mensagem"
        placeholderTextColor={colors.placeholder}
        value={text}
        onChangeText={setText}
        maxLength={500}
        multiline
      />
      <Pressable onPress={handleSend} hitSlop={8} disabled={!text.trim()}>
        <Ionicons name="send" size={20} color={text.trim() ? colors.accent : colors.textMuted} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'flex-end', gap: 10,
    borderWidth: 1, borderColor: colors.border, borderRadius: 24,
    paddingHorizontal: 16, paddingVertical: 10,
    marginHorizontal: 20, marginBottom: 16,
  },
  input: { flex: 1, color: colors.text, fontSize: 14, maxHeight: 100 },
});