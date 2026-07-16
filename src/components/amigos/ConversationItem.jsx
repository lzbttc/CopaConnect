import { Pressable, View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { Avatar } from './Avatar';

export function ConversationItem({ friendId, nome, online, lastMessage, time, unreadCount = 0 }) {
  return (
    <Pressable
      style={styles.row}
      onPress={() => router.push(`/chat/${friendId}`)}
    >
      <Avatar online={online} />
      <View style={styles.textWrapper}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.message} numberOfLines={1}>{lastMessage}</Text>
      </View>
      <View style={styles.rightWrapper}>
        <Text style={styles.time}>{time}</Text>
        {unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{unreadCount}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14 },
  textWrapper: { flex: 1, gap: 4 },
  nome: { color: colors.text, fontSize: typography.fontSize.xl, fontFamily: typography.fontFamily.semiBold },
  message: { color: colors.textMuted, fontSize: typography.fontSize.base, fontFamily: typography.fontFamily.regular },
  rightWrapper: { alignItems: 'flex-end', gap: 6 },
  time: { color: colors.textMuted, fontSize: typography.fontSize.sm, fontFamily: typography.fontFamily.regular },
  unreadBadge: {
    backgroundColor: colors.accent,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: colors.accentText,
    fontSize: 10,
    fontFamily: typography.fontFamily.semiBold,
    textAlign: 'center',
  },
});