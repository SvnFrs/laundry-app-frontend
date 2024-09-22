import React from "react";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import { Feather } from "@expo/vector-icons";

export default function CloseButton({
  destination,
}: ButtonProps) {
  return (
    <Link href={destination} asChild>
      <Pressable
        className="flex-row rounded-xl py-3 px-3 items-center bg-gray-200"
      >
        <Feather
          name="x"
          size={24}
          color="#65c8ce"
        />
      </Pressable>
    </Link>
  );
}
