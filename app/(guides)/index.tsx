import BigButton from "@/components/button/BigButton";
import ImageViewer from "@/components/image/ImageViewer";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const logoImage = require("../../assets/images/logo.jpeg");

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      {/* Title Section */}
      <View className="flex-1 justify-center items-center">
        <View className="my-2">
          <BoldText label={"Chào mừng bạn yêu!"} />
        </View>
        <View className="my-2">
          <RegularText
            label={"Trải nghiệm dịch vụ giặt ủi cùng với chúng tôi"}
          />
        </View>
      </View>

      {/* Logo Section */}
      <View className="flex-none justify-center items-center my-4">
        <ImageViewer source={logoImage} width={220} height={220} />
      </View>

      {/* Button Section */}
      <BigButton
        destination={"/(guides)/nearby"}
        label={"Bắt đầu thôi"}
        width={350}
      />
    </View>
  );
}
