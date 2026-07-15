import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../src/theme/colors';

export default function AgendaScreen() { // troque o nome da função e o texto por tela
  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <View style={styles.center}>
        <Text style={styles.text}>Tela de Agenda</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: colors.textMuted, fontSize: 14 },
});