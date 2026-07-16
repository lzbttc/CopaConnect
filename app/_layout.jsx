import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Changa-Light': require('../assets/fonts/Changa-Light.ttf'),
    'Changa-Regular': require('../assets/fonts/Changa-Regular.ttf'),
    'Changa-SemiBold': require('../assets/fonts/Changa-SemiBold.ttf'),
    'BostonCaps': require('../assets/fonts/BostonCaps.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}