import React, { useState } from "react";
import { View, ScrollView, Linking } from "react-native";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import IconButton from "@/components/button/IconButton";
import ComplexButton from "@/components/button/ComplexButton";
import ImageViewer from "@/components/image/ImageViewer";
import { useUser } from "@/contexts/UserContext";
import SmartButton from "@/components/button/SmartButton";

const avatarImage = require("../../../assets/images/sample/avatar.jpg");

export default function Index() {
  const { phoneNumber } = useUser();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const handleSelect = (buttonId: string) => {
    setSelectedButton((prev) => (prev === buttonId ? null : buttonId));
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 justify-center bg-white">
        {/* Title Section */}
        <View className="mt-12 items-center">
          <BoldText label={"Trang cá nhân"} />
        </View>

        <View className="flex-none justify-center items-center my-8">
          <ImageViewer source={avatarImage} width={120} height={120} />
        </View>

        <View className="items-center">
          <BoldText label={phoneNumber} />
        </View>

        <View className="items-center py-3">
          <RegularText label={"Số điện thoại"} />
        </View>

        <View className="flex-row">
          <View className="flex-1 items-center">
            <IconButton
              destination={"/(tabs)/(profile)"}
              label={"Chỉnh sửa"}
              icon={"edit"}
              iconColor="#65c8ce"
              buttonColor="gray"
              textColor="black"
            />
          </View>
        </View>

        <View className="flex-1 items-center my-5">
          <View className="my-1">
            <SmartButton
              destination={"/payment"}
              boldLabel={"Ưu đãi"}
              buttonColor={"gray"}
              width={350}
              icon={"gift"}
              additionalInfo="Bạn hiện không có ưu đãi nào"
              selected={selectedButton === "button0"}
              onPress={() => handleSelect("button0")}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(profile)"}
              boldLabel={"Feedback"}
              label={">"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"users-gear"}
              iconColor={"#65c8ce"}
              onPress={() => Linking.openURL("https://forms.gle/iJGUj7zmvU6crPWQ7")}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Giúp đỡ"}
              label={">"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"file-circle-question"}
              iconColor={"#65c8ce"}
              onPress={() => Linking.openURL("https://easy-laundry.vercel.app")}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Đăng xuất"}
              label={""}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"door-open"}
              iconColor={"#65c8ce"}
            />
          </View>
        </View>

        {/* <View className="flex-1 flex-row my-9 justify-end">
          <View className="flex-1 justify-end items-center">
            <IconButton
              destination={"/(tabs)/home"}
              label={"Map"}
              icon={"map"}
            />
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
}
