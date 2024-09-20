import React from "react";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps"; 

export default function Button({ destination, label, color, width }: ButtonProps) {
  if (color === 'gray') {
    return (
      <View className="flex-1 justify-end mb-8 items-center">
        <Link href={destination} asChild>
          <Pressable
            style={{ width }}
            className="rounded-md py-3 bg-gray-200 active:bg-gray-300 px-4"
          >
            <Text className="text-sky-400 text-center">{label}</Text>
          </Pressable>
        </Link>
      </View>
    );
  }
  return (
    <View className="flex-1 justify-end mb-8 items-center">
      <Link href={destination} asChild>
        <Pressable
          style={{ width }}
          className="rounded-md py-3 bg-sky-500 active:bg-sky-600 px-4"
        >
          <Text className="text-white text-center">{label}</Text>
        </Pressable>
      </Link>
    </View>
  );
}
