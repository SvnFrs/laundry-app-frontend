import React from "react";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import { FontAwesome6 } from "@expo/vector-icons";

export default function BigButton({
  destination,
  boldLabel,
  regularLabel,
  icon,
}: ButtonProps) {
  return (
    <View className="">
      <Link href={destination} asChild>
        <Pressable
          className="flex-col rounded-xl py-2 px-4 bg-gray-100 active:bg-gray-200 justify-center"
          style={{ width: 160, height: 160 }}
        >
          <View className="">
            <FontAwesome6 name={icon} size={36} color="#65c8ce" />
          </View>
          <Text className="text-black font-extrabold py-2">{boldLabel}</Text>
          <Text className="text-xs text-gray-400">{regularLabel}</Text>
        </Pressable>
      </Link>
    </View>
  );
}
