import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

export function Avatar({ online, size = 44 }) {
  return (
    <View style={[styles.wrapper, { width: size, height: size }]}>
      <Ionicons name="person-circle-outline" size={size} color={colors.textMuted} />
      {online && <View style={styles.onlineDot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { position: 'relative' },
  onlineDot: {
    position: 'absolute', bottom: 0, right: 0,
    width: 11, height: 11, borderRadius: 6,
    backgroundColor: colors.online, borderWidth: 2, borderColor: colors.gradientMid,
  },
});