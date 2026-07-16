import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function FriendsOnline({ friends, extraCount = 0 }) {
  return (
    <View style={styles.card}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.scroll}
      >
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
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  scroll: { flexGrow: 0, overflow: 'visible' },
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
    borderWidth: 1.5,
    borderColor: colors.gradientMid,
  },
  name: { color: colors.text, fontSize: typography.fontSize.sm, fontFamily: typography.fontFamily.regular, marginTop: 4, textAlign: 'center' },
  extraCircle: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', justifyContent: 'center',
  },
  extraText: { color: colors.text, fontSize: typography.fontSize.base, fontFamily: typography.fontFamily.semiBold },
});