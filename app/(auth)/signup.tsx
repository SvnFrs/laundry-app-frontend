import React from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Button from "@/components/button/Button";
import PhoneInput from "@/components/input/PhoneInput";
import BoldText from "@/components/text/BoldText";
import NavigateText from "@/components/text/NavigateText";
import RegularText from "@/components/text/RegularText";

export default function Signup() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center justify-center bg-white">
          {/* Title Section */}
          <View className="flex-1 justify-center mt-36">
            <View className="my-2">
              <BoldText label={"Số Điện Thoại"} />
            </View>
          </View>

          {/* Input Section */}
          <View className="flex-1 justify-start mb-72">
            <View className="my-5">
              <PhoneInput />
            </View>

            <Button
              destination={"/(auth)/otp"}
              label={"Gửi OTP"}
              width={350}
              flex={0}
            />

            <View className="mt-5">
              <RegularText label={"Hãy nhập số điện thoại của bạn"} />
            </View>
          </View>

          {/* Button Section */}
          <View className="flex-1 flex-row justify-end">
            <RegularText label={"Bạn đã có tài khoản? "} />
            <NavigateText destination={"/(auth)/login"} label={"Đăng nhập"} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
