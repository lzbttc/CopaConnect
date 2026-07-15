import { Pressable, View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../theme/colors';
import { Avatar } from './Avatar';

export function FriendItem({ friendId, nome, online }) {
  return (
    <Pressable
      style={styles.row}
      onPress={() => router.push(`/chat/${friendId}`)} // TODO(Etapa 6): criar rota de chat 1:1
    >
      <Avatar online={online} />
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.status}>{online ? 'Online' : 'Offline'}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  nome: { color: colors.text, fontSize: 15, fontWeight: '700' },
  status: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
});