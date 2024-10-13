import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { UserProvider } from "../contexts/UserContext"; // Import UserProvider

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    SplashScreen.hideAsync();
    router.replace("/(tabs)/(home)");
  }, []);

  return (
    <UserProvider>
      <View style={styles.container}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_bottom",
            animationDuration: 500,
            contentStyle:{
              backgroundColor:'#FFFFFF'
            }
          }}
        />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Default screen color
  },
});
