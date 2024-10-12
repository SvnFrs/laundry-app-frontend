/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PhoneInput({ value, onChangeText }:any) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-lg px-2 py-2">
      {/* Flag and Country Code */}
      <TouchableOpacity className="flex-row items-center mr-1">
        <Image
          className="mx-2"
          source={require('../../assets/images/flags/vn.png')}
          style={{ width: 30, height: 30 }}
        />
        <Text className="font-bold">+84</Text>
      </TouchableOpacity>

      {/* Phone Number Input */}
      <TextInput
        className="flex-1 mx-1"
        placeholder="Mobile number"
        keyboardType="numeric"
        value={value}                 // Current phone number value
        onChangeText={onChangeText}   // Function to handle text change
      />
    </View>
  );
}
