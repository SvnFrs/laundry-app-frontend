import React from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Button from "@/components/button/Button";
import BoldText from "@/components/text/BoldText";
import NavigateText from "@/components/text/NavigateText";
import RegularText from "@/components/text/RegularText";
import OTPInput from "@/components/input/OTPInput";

export default function OTP() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center justify-center bg-white">
          {/* Title Section */}
          <View className="flex-1 items-center justify-center mt-36">
            <View className="my-2">
              <BoldText label={"Nhập OTP"} />
            </View>
            <View className="my-2">
              <RegularText label={"Xin hãy nhập OTP được gửi tới +84 XXX XXX XXX"} />
            </View>
          </View>

          {/* Input Section */}
          <View className="flex-1 justify-start mb-72">
            <View className="my-5">
              <OTPInput/>
            </View>

            <Button
              destination={"/(location)/"}
              label={"Chấp nhận"}
              width={350}
              flex={0}
            />

            <View className="mt-5 flex-1 flex-row justify-center">
              <RegularText label={"Chưa nhận được OTP? "} />
              <NavigateText destination={"/(auth)/login"} label={"Gửi lại"} />
            </View>
          </View>

          {/* Button Section */}
          <View className="flex-1 flex-row justify-end mb-3">
            <RegularText label={"Bạn đã có tài khoản? "} />
            <NavigateText destination={"/(auth)/login"} label={"Đăng nhập"} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
