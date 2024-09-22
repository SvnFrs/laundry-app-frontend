import React from "react";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function ComplexButton({
  destination,
  label,
  boldLabel,
  regularLabel,
  width,
  flex,
  icon,
  buttonColor,
  iconColor,
  textColor,
}: ButtonProps) {
  return (
    <View
      className={`${flex === 1 ? "flex-1" : ""} justify-end mb-2 items-center`}
    >
      <Link href={destination} asChild>
      <Pressable
  style={{ width }}
  className={`flex-row rounded-md py-3 px-4 items-center ${
    buttonColor === "gray"
      ? "bg-gray-100 active:bg-gray-200"
      : buttonColor === "white"
      ? "bg-white active:bg-gray-200"
      : "bg-sky-500 active:bg-sky-600"
  }`}
>

          {/* Icon */}
          <FontAwesome6 name={icon} size={24} color={iconColor} />

          {/* Text block, flex-1 ensures it takes up the available space */}
          <View className="flex-row flex-1">
            <View className="px-4">
              <Text
                className={`font-extrabold ${
                  textColor === "white" ? "text-white" : "text-black"
                }`}
              >
                {boldLabel}
              </Text>
              {regularLabel && (
                <Text
                  className={`font-thin text-xs ${
                    textColor === "white" ? "text-white" : "text-black"
                  }`}
                >
                  {regularLabel}
                </Text>
              )}
            </View>
          </View>

          {/* Label should be pushed to the right */}
          {label && (
            <View className="ml-auto">
              <Text className="text-sky-500">{label}</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}
