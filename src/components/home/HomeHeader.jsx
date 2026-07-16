import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function HomeHeader({ notificationsCount = 0 }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <View style={styles.brand}>
        <Text style={styles.logo}>CopaConnect</Text>
        <Image source={require('../../../assets/symbol.png')} style={styles.symbol} resizeMode="contain" />
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.iconButton}
          hitSlop={8}
          onPress={() => router.push('/notificacoes')}
          accessibilityRole="button"
          accessibilityLabel={`Notificações${notificationsCount > 0 ? `, ${notificationsCount} não lidas` : ''}`}
        >
          <Ionicons name="notifications-outline" size={22} color={colors.accent} />
          {notificationsCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationsCount}</Text>
            </View>
          )}
        </Pressable>

        <Pressable
          style={styles.profileButton}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Perfil do usuário"
          onPress={() => console.log('TODO: tela de perfil ainda não definida')}
        >
          <Ionicons name="person-outline" size={20} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  symbol: { width: 28, height: 28 },
  logo: { color: colors.text, fontSize: typography.fontSize['5xl'], fontFamily: typography.fontFamily.brand, letterSpacing: 0.5 },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconButton: { padding: 4 },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: colors.accent,
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: { color: colors.accentText, fontSize: typography.fontSize.xs, fontFamily: typography.fontFamily.semiBold },
  profileButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});