import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export function Avatar({ online, size = 44 }) {
  return (
    <View style={[styles.wrapper, { width: size, height: size, borderRadius: size / 2 }]}>
      <Ionicons name="person-outline" size={size * 0.5} color={colors.accent} />
      {online && <View style={styles.onlineDot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: colors.online,
    borderWidth: 1.5,
    borderColor: colors.gradientMid,
  },
});