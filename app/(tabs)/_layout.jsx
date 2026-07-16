import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';

const ICONS = {
  index: 'home',
  agenda: 'calendar',
  amigos: 'people',
  bolao: 'trophy',
  estatisticas: 'stats-chart',
};

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: 'rgba(10, 25, 48, 0.95)',
          borderTopWidth: 1,
          borderTopColor: 'rgba(255, 255, 255, 0.15)',
          borderLeftWidth: 1,
          borderLeftColor: 'rgba(255, 255, 255, 0.15)',
          borderRightWidth: 1,
          borderRightColor: 'rgba(255, 255, 255, 0.15)',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 64 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
          paddingTop: 12,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? ICONS[route.name] : `${ICONS[route.name]}-outline`}
            size={26}
            color={color}
          />
        ),
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="agenda" />
      <Tabs.Screen name="amigos" />
      <Tabs.Screen name="bolao" />
      <Tabs.Screen name="estatisticas" />
    </Tabs>
  );
}