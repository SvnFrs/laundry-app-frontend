import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
