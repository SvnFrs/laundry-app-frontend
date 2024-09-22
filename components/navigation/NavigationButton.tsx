import { View, Text, Pressable } from "react-native";
import React from "react";
import { icon } from "@/constants/icon";

export default function NavigationButton({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}) {

  const buttonStyles = isFocused ? "bg-white" : "bg-transparent";
  const textColor = isFocused ? "text-sky-500" : "text-gray-500";
  const iconColor = isFocused ? "#65c8ce" : "#fff";

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`flex-1 flex-row items-center justify-center py-4 px-4 rounded-2xl ${buttonStyles}`}
    >
      {/* display the icon */}
      {icon[routeName]({
        color: iconColor,
      })}

      {/* show the label only when focused */}
      {isFocused && (
        <Text className={`text-xs ml-2 ${textColor}`}>{label}</Text>
      )}
    </Pressable>
  );
}
