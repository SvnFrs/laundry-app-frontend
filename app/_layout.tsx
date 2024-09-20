import { useRouter, Slot } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    SplashScreen.hideAsync();
    // Automatically redirect to (tabs)/(home) after the layout is mounted
    router.replace("/(tabs)/(home)");
  }, []);

  // Ensure the Slot is rendered so the layout can mount correctly
  return <Slot />;
}
