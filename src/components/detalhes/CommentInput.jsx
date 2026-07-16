import { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function CommentInput({ onSend }) {
  const [text, setText] = useState('');

  function handleSend() {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escreva um Comentário"
        placeholderTextColor={colors.placeholder}
        value={text}
        onChangeText={setText}
        maxLength={280}
      />
      <Pressable onPress={handleSend} hitSlop={8} disabled={!text.trim()}>
        <Ionicons name="paper-plane-outline" size={22} color={colors.accent} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.regular,
  },
});