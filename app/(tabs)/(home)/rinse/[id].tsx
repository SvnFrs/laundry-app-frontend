import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import SmartButton from "@/components/button/SmartButton";
import { Feather } from "@expo/vector-icons";
import ImageViewer from "@/components/image/ImageViewer";
import SmallText from "@/components/text/SmallText";
import BackButton from "@/components/button/BackButton";
import Button from "@/components/button/Button";

const washingImage = require("../../../../assets/images/sample/washing.webp");

export default function Rinse() {
  const { id } = useLocalSearchParams();

  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleSelect = (buttonId: string) => {
    setSelectedButton((prev) => (prev === buttonId ? null : buttonId));
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 justify-center bg-white">
        {/* Title Section */}

        <View className="absolute top-10">
          <BackButton destination={`/(tabs)/(home)/wash/${id}`} />
        </View>

        <View className="mt-12 items-center">
          <BoldText label={`Máy số ${id}`} />
        </View>

        <View className="flex-row justify-center items-center py-3">
          <View className="flex-row items-center">
            <Feather name="check-square" size={18} color="#259225" />
            <View className="pl-2">
              <SmallText label={"Sẵn sàng"} />
            </View>
          </View>

          {/* Separator */}
          <Text className="text-2xl px-3 font-thin text-center leading-none">
            |
          </Text>

          <View className="flex-row items-center">
            <Feather name="map-pin" size={18} color="#259225" />
            <View className="pl-2">
              <SmallText label={"Nguyễn Văn Cừ"} />
            </View>
          </View>
        </View>

        <View className="flex-none justify-center items-center">
          <ImageViewer source={washingImage} width={350} height={250} />
        </View>

        <View className="items-start flex-row px-6 py-4">
          <RegularText label={"Chọn hương thơm"} />
        </View>

        <View className="flex-1 items-center">
          <View className="my-1">
            <SmartButton
              destination={`/(home)/rinse/${id}`}
              boldLabel={"Thơm mùi hoa hồng"}
              regularLabel="5000 đồng"
              buttonColor={"gray"}
              width={350}
              icon={"star"}
              additionalInfo="Hương thơm nước giặt comfor"
              selected={selectedButton === "button1"}
              onPress={() => handleSelect("button1")}
            />
          </View>
          <View className="my-1">
            <SmartButton
              destination={`/(home)/rinse/${id}`}
              boldLabel={"Thơm mùi hoa lan"}
              regularLabel="5000 đồng"
              label={">"}
              width={350}
              icon={"activity"}
              additionalInfo="Thơm mùi hoa lan"
              selected={selectedButton === "button2"}
              onPress={() => handleSelect("button2")}
            />
          </View>
          <View className="my-1">
            <SmartButton
              destination={`/(home)/rinse/${id}`}
              boldLabel={"Thơm mùi cam sả"}
              regularLabel="5000 đồng"
              width={350}
              icon={"pie-chart"}
              additionalInfo="Thơm mùi cam sả"
              selected={selectedButton === "button3"}
              onPress={() => handleSelect("button3")}
            />
          </View>
        </View>

        <View className="flex-1 flex-row py-5">
          <Button
            destination={`/(home)/payment/${id}`}
            label={"Chấp nhận"}
            width={350}
            flex={1}
          />
        </View>
      </View>
    </ScrollView>
  );
}
