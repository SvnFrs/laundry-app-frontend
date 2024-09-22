import { Stack } from 'expo-router';

export default function QRLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}
