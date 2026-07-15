import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export function MessageBubble({ autor, texto, hora }) {
  const isMine = autor === 'eu';

  return (
    <View style={[styles.wrapper, isMine ? styles.wrapperMine : styles.wrapperFriend]}>
      <View style={[styles.bubble, isMine ? styles.bubbleMine : styles.bubbleFriend]}>
        <Text style={isMine ? styles.textMine : styles.textFriend}>{texto}</Text>
      </View>
      <Text style={[styles.hora, isMine ? styles.horaMine : styles.horaFriend]}>{hora}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { maxWidth: '78%', marginBottom: 12 },
  wrapperMine: { alignSelf: 'flex-end', alignItems: 'flex-end' },
  wrapperFriend: { alignSelf: 'flex-start', alignItems: 'flex-start' },
  bubble: { borderRadius: 18, paddingHorizontal: 16, paddingVertical: 10 },
  bubbleMine: { backgroundColor: colors.accent, borderBottomRightRadius: 4 },
  bubbleFriend: { backgroundColor: '#FFFFFF', borderBottomLeftRadius: 4 },
  textMine: { color: colors.accentText, fontSize: 14 },
  textFriend: { color: '#1A1A1A', fontSize: 14 },
  hora: { fontSize: 10, marginTop: 4, marginHorizontal: 4 },
  horaMine: { color: colors.textMuted },
  horaFriend: { color: colors.textMuted },
});