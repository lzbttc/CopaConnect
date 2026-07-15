import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { Avatar } from './Avatar';

export function RequestItem({ nome, online, time, onAccept, onDecline }) {
  return (
    <View style={styles.row}>
      <Avatar online={online} />
      <View style={styles.textWrapper}>
        <Text style={styles.nome}>{nome}</Text>
        <View style={styles.actions}>
          <Pressable style={styles.acceptButton} onPress={onAccept} hitSlop={6}>
            <Ionicons name="checkmark" size={16} color={colors.accentText} />
          </Pressable>
          <Pressable style={styles.declineButton} onPress={onDecline} hitSlop={6}>
            <Ionicons name="close" size={16} color={colors.accentText} />
          </Pressable>
        </View>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 12 },
  textWrapper: { flex: 1 },
  nome: { color: colors.text, fontSize: 15, fontWeight: '700', marginBottom: 6 },
  actions: { flexDirection: 'row', gap: 8 },
  acceptButton: { backgroundColor: colors.accent, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 6 },
  declineButton: { backgroundColor: colors.accent, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 6 },
  time: { color: colors.textMuted, fontSize: 11 },
});