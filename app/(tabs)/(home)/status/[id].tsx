import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Button from "@/components/button/Button";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import ImageViewer from "@/components/image/ImageViewer";
import CloseButton from "@/components/button/CloseButton";
import { useOrder } from "@/contexts/OrderContext";
import Progress from "@/components/progress/progress";

const happyImage = require("../../../../assets/images/sample/happy.png");
const loaderImage = require("../../../../assets/images/sample/loader.png");

export default function Status() {
  const { id } = useLocalSearchParams();
  const { orderId, isComplete } = useOrder();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 items-center justify-center bg-white">
          <View className="absolute top-10 right-10">
            <CloseButton destination="/" />
          </View>

          <View className="items-center mt-28">
            <View className="my-2">
              <BoldText
                label={isComplete ? "Hoàn tất" : `Đang giặt cho máy ${orderId || id}`}
              />
            </View>
            <View className="py-2">
              <RegularText
                label={
                  isComplete
                    ? "Đồ giặt của bạn đã được giặt xong"
                    : "Chúng tôi sẽ thông báo cho bạn sau khi giặt xong"
                }
              />
            </View>
          </View>

          <View className="flex-none justify-center items-center mb-10">
            <ImageViewer
              source={happyImage}
              width={100}
              height={150}
            />
          </View>

          <Progress />

          <View className="flex-1 flex-row py-5">
            <Button
              destination="/details"
              label="Chọn thêm đồ giặt mới"
              width={350}
              flex={1}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
