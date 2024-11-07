import React from "react";
import { Link } from "expo-router";
import { Pressable, TouchableOpacity } from 'react-native';
import { ButtonProps } from "../../types/ButtonProps";
import { Feather } from "@expo/vector-icons";

export default function BackButton({ destination }: ButtonProps) {
  return (
    <Link href={destination} asChild>
      <TouchableOpacity
        className="flex-row rounded-xl py-3 px-4 items-center"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Feather name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
    </Link>
  );
}
