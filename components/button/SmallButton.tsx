import React from "react";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import { FontAwesome6 } from "@expo/vector-icons";

export default function SmallButton({
  destination,
  boldLabel,
  regularLabel,
  icon,
}: ButtonProps) {
  return (
    <View className="">
      <Link href={destination} asChild>
        <Pressable
          className="flex-col rounded-md py-1 px-4 bg-gray-100 active:bg-sky-400 justify-center items-center"
          style={{ width: 100, height: 100 }}
        >
          {({ pressed }) => (
            <>
              <View className="">
                <FontAwesome6
                  name={icon}
                  size={24}
                  color={pressed ? "#fff" : "#65c8ce"}
                />
              </View>
              <Text className={`font-extrabold py-2 ${pressed ? "text-white" : "text-black"}`}>
                {boldLabel}
              </Text>
              <Text className={`text-xs ${pressed ? "text-white" : "text-gray-400"}`}>
                {regularLabel}
              </Text>
            </>
          )}
        </Pressable>
      </Link>
    </View>
  );
}
