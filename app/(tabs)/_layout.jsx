import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../src/theme/colors';

const ICONS = {
  index: 'home',
  agenda: 'calendar',
  amigos: 'people',
  bolao: 'trophy',
  estatisticas: 'stats-chart',
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.gradientStart, borderTopColor: colors.border },
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? ICONS[route.name] : `${ICONS[route.name]}-outline`}
            size={size ?? 24}
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