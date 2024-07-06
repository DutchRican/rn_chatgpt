import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{
        presentation: 'modal', title: '', headerLeft: () => (
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="close-outline" size={28} />
          </TouchableOpacity>
        )
      }} />
    </Stack>
  );
}
