import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export function FriendsOnline({ friends, extraCount = 0 }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {friends.map((friend) => (
        <View key={friend.id} style={styles.item}>
          <View style={styles.avatarWrapper}>
            <Ionicons name="person-circle-outline" size={40} color={colors.textMuted} />
            <View style={styles.onlineDot} />
          </View>
          <Text style={styles.name} numberOfLines={1}>{friend.nome}</Text>
        </View>
      ))}

      {extraCount > 0 && (
        <View style={styles.item}>
          <View style={styles.extraCircle}>
            <Text style={styles.extraText}>+{extraCount}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16, paddingRight: 8 },
  item: { alignItems: 'center', width: 60 },
  avatarWrapper: { position: 'relative' },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.online,
    borderWidth: 2,
    borderColor: colors.gradientMid,
  },
  name: { color: colors.text, fontSize: 11, marginTop: 4, textAlign: 'center' },
  extraCircle: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: colors.cardBg, alignItems: 'center', justifyContent: 'center',
  },
  extraText: { color: colors.text, fontSize: 12, fontWeight: '700' },
});