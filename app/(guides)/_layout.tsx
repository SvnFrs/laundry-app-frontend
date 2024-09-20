import React from "react";
import { Stack } from "expo-router";

export default function GuidesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationDuration: 200,
      }}
    >
      {/* <Stack.Screen name="index" /> */}
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}
