import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import BoldText from "@/components/text/BoldText";
import SearchInput from "@/components/input/SearchInput";
import RegularText from "@/components/text/RegularText";
import IconButton from "@/components/button/IconButton";
import ComplexButton from "@/components/button/ComplexButton";
import BackButton from "@/components/button/BackButton";

export default function List() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center bg-white">

        <View className="absolute top-10">
          <BackButton destination={"/(location)/chooser"} />
        </View>
          {/* Title Section */}
          <View className="mt-12 justify-center items-center">
            <View className="my-2">
              <BoldText label={"Chọn Vị Trí"} />
            </View>
          </View>

          {/* Input Section */}
          <View className="justify-start items-center">
            <View className="mt-2">
              <SearchInput />
            </View>
          </View>

          <View className="items-start flex-row px-8 pt-4">
            <RegularText label={"Lưu vị trí"} />
          </View>

          <View className="mt-3">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Cơ quan, trường học"}
              regularLabel={"Địa chỉ"}
              buttonColor={"gray"}
              width={350}
              flex={1}
              icon={"school"}
            />

            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Nhà"}
              regularLabel={"Địa chỉ"}
              buttonColor={"gray"}
              width={350}
              flex={1}
              icon={"house"}
            />
          </View>

          {/* Button Section */}
          <View className="flex-1 flex-row my-9 justify-end">
            <View className="flex-1 justify-end items-center">
              <IconButton
                destination={"/(tabs)/(home)"}
                label={"Map"}
                icon={"map"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
