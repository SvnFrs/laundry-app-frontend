import React from "react";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps"; 

export default function BigButton({ destination, label, width }: ButtonProps) {
  return (
    <View className="flex-1 justify-end mb-8">
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
