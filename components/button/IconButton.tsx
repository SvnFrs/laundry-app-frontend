import React from "react";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import { FontAwesome6 } from "@expo/vector-icons";

export default function IconButton({
  destination,
  label,
  icon,
  buttonColor,
  textColor,
  iconColor,
}: ButtonProps) {
  return (
    <Link href={destination} asChild>
      <Pressable
        className={`flex-row rounded-xl py-3 px-4 items-center ${
          buttonColor === "gray"
            ? "bg-gray-100 active:bg-gray-200"
            : "bg-sky-500 active:bg-sky-600"
        }`}
      >
        <FontAwesome6
          name={icon}
          size={24}
          color={`${iconColor ? iconColor : "white"}`}
        />
        <Text
          className={`px-2 ${
            textColor === "black" ? "text-black" : "text-white"
          }`}
        >
          {label}
        </Text>
      </Pressable>
    </Link>
  );
}
