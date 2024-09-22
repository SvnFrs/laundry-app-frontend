import { TextProps } from "@/types/TextProps";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function NavigateText({ destination, label }: TextProps) {
  return (
    <Link href={destination} asChild>
      <TouchableOpacity>
        <Text className="text-sm font-extrabold max-w-sm text-center text-sky-500">
          {label}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
