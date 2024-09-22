import React from "react";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import { Feather, FontAwesome6 } from "@expo/vector-icons";

export default function BackButton({
  destination,
}: ButtonProps) {
  return (
    <Link href={destination} asChild>
      <Pressable
        className="flex-row rounded-xl py-3 px-4 items-center"
      >
        <Feather
          name="arrow-left"
          size={24}
          color="#000"
        />
      </Pressable>
    </Link>
  );
}
