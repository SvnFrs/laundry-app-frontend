import React from "react";
import { View, Pressable, Text, Image } from "react-native";
import { ButtonProps } from "../../types/ButtonProps";
import { FontAwesome6 } from "@expo/vector-icons";

export default function PaymentButton({
  boldLabel,
  regularLabel,
  label,
  width,
  flex,
  icon,
  selected,
  onPress,
  additionalInfo,
}: ButtonProps) {
  return (
    <View
      className={`${flex === 1 ? "flex-1" : ""} justify-end mb-2 items-center`}
    >
      {/* <Link href={destination} asChild> */}
        <Pressable
          style={{ width }}
          className={`flex-row rounded-md py-3 px-4 items-center ${
            selected ? "bg-sky-400" : "bg-white"
          }`}
          onPress={onPress}
        >
          {({ pressed }) => (
            <>
              <View className="">
                <FontAwesome6
                  name={icon}
                  size={24}
                  color={selected || pressed ? "#fff" : "#65c8ce"}
                />
              </View>

              <View className="flex-row flex-1">
                <View className="px-4">
                  <Text
                    className={`font-extrabold ${
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
              {label && (
                <View className="ml-auto">
                  <Text className={`text-xs ${
                        selected || pressed ? "text-white" : "text-sky-500"
                      }`}>{label}</Text>
                </View>
              )}
            </>
          )}
        </Pressable>
      {/* </Link> */}

      {/* Dropdown for additional information */}
      {selected && (
        <Pressable
          className={`flex-row rounded-md py-3 px-6 items-center bg-[#f3f5fb]`}
          // style={{ width: 350 }}
        >
          <View className="px-4">
          <Image
            className="rounded-xl"
            style={{ width: 300, height: 300 }} // Limit image height to 200
            source={additionalInfo}
            resizeMode="contain" // Ensure the image fits within the container
          />
          </View>
        </Pressable>
      )}
    </View>
  );
}
