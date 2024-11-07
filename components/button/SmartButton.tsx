import React from "react";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import { Feather } from "@expo/vector-icons";

export default function SmartButton({
  destination,
  boldLabel,
  regularLabel,
  width,
  flex,
  icon,
  selected,
  onPress,
  additionalInfo,
}: ButtonProps) {
  return (
    <View className={`${flex === 1 ? "flex-1" : ""} justify-end mb-2 items-center`}>
      <Link href={destination}>
        <Pressable
          style={{ width }}
          className={`flex-row rounded-md py-3 px-4 items-center ${
            selected ? "bg-sky-400" : "bg-gray-100"
          }`}
          onPress={onPress}
        >
          {({ pressed }) => (
            <>
              <View className="">
                <Feather
                  name={icon}
                  size={28}
                  color={selected || pressed ? "#fff" : "#65c8ce"}
                />
              </View>

              <View className="flex-row flex-1">
                <View className="px-4">
                  <Text
                    className={`font-extrabold py-2 ${
                      selected || pressed ? "text-white" : "text-black"
                    }`}
                  >
                    {boldLabel}
                  </Text>
                  {regularLabel && (
                    <Text
                      className={`text-xs ${
                        selected || pressed ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {regularLabel}
                    </Text>
                  )}
                </View>
              </View>
            </>
          )}
        </Pressable>
      </Link>

      {/* Dropdown for additional information */}
      {selected && (
        <Pressable className={`flex-row rounded-md py-3 px-6 items-center bg-[#f3f5fb]`} style={{ width: 350 }}>
          <Feather name="info" size={24} color="#e2e5f4" />
          <View className="px-4">
            <Text className="text-xs font-bold text-gray-500">{additionalInfo}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}
