import Button from "@/components/button/Button";
import ImageViewer from "@/components/image/ImageViewer";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import React from "react";
import { View } from "react-native";

const logoImage = require("../../assets/images/logo.png");

export default function Information() {
  return (
    <View className="flex-auto items-center justify-center bg-white">
      {/* Title Section */}
      <View className="flex-1 justify-center items-center">
        <View className="my-2">
          <BoldText label={"Kiểm tra tình trạng máy giặt"} />
        </View>
        <View className="my-2">
          <RegularText
            label={"Hiển thị tình trạng máy giặt thời gian thực, đếm ngược thời gian giặt, cân nặng máy giặt có thể giặt và hơn thế nữa"}
          />
        </View>
      </View>

      {/* Logo Section */}
      <View className="flex-none justify-center items-center my-4">
        <ImageViewer source={logoImage} width={220} height={220} />
      </View>

      {/* Button Section */}
      <View className="flex-1 flex-row my-4">
        <Button
          destination={"/(auth)/signup"}
          label={"Bỏ qua"}
          color={"gray"}
          width={150}
        />
        <Button
          destination={"/(guides)/payment"}
          label={"Tiếp theo"}
          width={150}
        />
      </View>
    </View>
  );
}
