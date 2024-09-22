import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PhoneInput() {
    return (
        <View className="flex-row items-center bg-gray-100 rounded-lg px-2 py-2">
            <TouchableOpacity className="flex-row items-center mr-1">
                <Image className="mx-2" source={require('../../assets/images/flags/vn.png')} style={{ width: 30, height: 30 }}/>
                <Text className="font-bold">+84</Text>
            </TouchableOpacity>
            <TextInput className="flex-1 mx-1" placeholder="Mobile number" keyboardType = "numeric"/>
        </View>
    )
}