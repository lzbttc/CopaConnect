import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { Avatar } from './Avatar';

export function RequestItem({ nome, online, time, onAccept, onDecline }) {
  return (
    <View style={styles.row}>
      <Avatar online={online} />
      <View style={styles.textWrapper}>
        <Text style={styles.nome}>{nome}</Text>
        <View style={styles.actions}>
          <Pressable style={styles.acceptButton} onPress={onAccept} hitSlop={6}>
            <Ionicons name="checkmark" size={18} color={colors.accentText} />
          </Pressable>
          <Pressable style={styles.declineButton} onPress={onDecline} hitSlop={6}>
            <Ionicons name="close" size={18} color={colors.accentText} />
          </Pressable>
        </View>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 14 },
  textWrapper: { flex: 1 },
  nome: { color: colors.text, fontSize: typography.fontSize.xl, fontFamily: typography.fontFamily.semiBold, marginBottom: 8 },
  actions: { flexDirection: 'row', gap: 10 },
  acceptButton: { backgroundColor: colors.accent, borderRadius: 16, paddingHorizontal: 28, paddingVertical: 6, alignItems: 'center', justifyContent: 'center' },
  declineButton: { backgroundColor: colors.accent, borderRadius: 16, paddingHorizontal: 28, paddingVertical: 6, alignItems: 'center', justifyContent: 'center' },
  time: { color: colors.textMuted, fontSize: typography.fontSize.sm, fontFamily: typography.fontFamily.regular },
});