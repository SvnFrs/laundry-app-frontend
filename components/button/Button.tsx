import React from "react";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";

export default function Button({ destination, label, color, width, flex }: ButtonProps) {
  return (
    <View className={`${flex === 1 ? "flex-1" : ""} justify-end mb-2 items-center`}>
      <Link href={destination} asChild>
        <Pressable
          style={{ width }}
          className={`rounded-md py-3 px-4 ${
            color === 'gray' ? "bg-gray-200 active:bg-gray-300" : "bg-sky-500 active:bg-sky-600"
          }`}
        >
          <Text className={`${color === 'gray' ? "text-sky-400" : "text-white"} text-center`}>
            {label}
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
