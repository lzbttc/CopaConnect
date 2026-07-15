import { Pressable, View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../theme/colors';
import { Avatar } from './Avatar';

export function ConversationItem({ friendId, nome, online, lastMessage, time }) {
  return (
    <Pressable
      style={styles.row}
      onPress={() => router.push(`/chat/${friendId}`)} // TODO(Etapa 6): criar rota de chat 1:1
    >
      <Avatar online={online} />
      <View style={styles.textWrapper}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.message} numberOfLines={2}>{lastMessage}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 12 },
  textWrapper: { flex: 1 },
  nome: { color: colors.text, fontSize: 15, fontWeight: '700' },
  message: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
  time: { color: colors.textMuted, fontSize: 11 },
});