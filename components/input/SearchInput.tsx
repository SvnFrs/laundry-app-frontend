import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchInput() {
  return (
    <View
      className="flex-row items-center bg-sky-500 rounded-lg px-2 py-2"
      style={{ width: 350 }}
    >
      <TouchableOpacity className="flex-row items-center mr-1">
        <Ionicons name="search-sharp" size={24} color="white" />
      </TouchableOpacity>
      <TextInput className="flex-1 mx-1 text-white" placeholder="Tìm kiếm vị trí" placeholderTextColor={"white"} />
    </View>
  );
}
