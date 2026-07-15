import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { Avatar } from '../amigos/Avatar';

export function ChatHeader({ nome, online }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12}>
        <Ionicons name="arrow-back" size={22} color={colors.text} />
      </Pressable>

      <Avatar online={online} size={40} />

      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.status}>{online ? 'Online' : 'Offline'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16,
    backgroundColor: colors.cardBg,
  },
  nome: { color: colors.text, fontSize: 16, fontWeight: '700' },
  status: { color: colors.textMuted, fontSize: 12, marginTop: 1 },
});