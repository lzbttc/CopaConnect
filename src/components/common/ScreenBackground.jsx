import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme/colors';

const GRADIENT = [colors.gradientStart, colors.gradientMid, colors.gradientEnd];

export function ScreenBackground({ children, style }) {
  return (
    <LinearGradient colors={GRADIENT} style={[styles.flex, style]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
