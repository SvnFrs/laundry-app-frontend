import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import IconButton from "@/components/button/IconButton";
import ComplexButton from "@/components/button/ComplexButton";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import BigButton from "@/components/button/BigButton";
import ImageViewer from "@/components/image/ImageViewer";
import SmallText from "@/components/text/SmallText";
import SmallButton from "@/components/button/SmallButton";
import BackButton from "@/components/button/BackButton";

export default function Details() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 justify-center bg-white">
        <View className="absolute top-10">
          <BackButton destination={"/(tabs)/(home)"} />
        </View>
        {/* Title Section */}
        <View className="mt-12 items-center">
          <BoldText label={"Tiệm giặt XXX"} />
        </View>

        <View className="flex-row justify-center items-center py-3">
          <View className="flex-row items-center">
            <Feather name="check-square" size={18} color="#259225" />
            <View className="pl-2">
              <SmallText label={"Mở cửa"} />
            </View>
          </View>

          {/* Separator */}
          <Text className="text-2xl px-3 font-thin text-center leading-none">
            |
          </Text>

          <View className="flex-row items-center">
            <Feather name="calendar" size={18} color="#259225" />
            <View className="pl-2">
              <SmallText label={"11 máy giặt còn hoạt động"} />
            </View>
          </View>
        </View>

        <View className="items-start flex-row px-4 py-3">
          <RegularText label={"Máy giặt hiện đang trống"} />
        </View>

        <View className="my-3 px-7 flex-row flex-wrap justify-start">
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/wash/1"}
              label={"Map"}
              icon={"water"}
              boldLabel={"Số. 1"}
              regularLabel="7 Kg"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/wash/4"}
              label={"Map"}
              icon={"water"}
              boldLabel={"Số. 4"}
              regularLabel="7 Kg"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/wash/5"}
              label={"Map"}
              icon={"fire"}
              boldLabel={"Số. 5"}
              regularLabel="7 Kg"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/wash/8"}
              label={"Map"}
              icon={"fire"}
              boldLabel={"Số. 8"}
              regularLabel="6 Kg"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/wash/9"}
              label={"Map"}
              icon={"water"}
              boldLabel={"Số. 9"}
              regularLabel="8 Kg"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/wash/10"}
              label={"Map"}
              icon={"fire"}
              boldLabel={"Số. 10"}
              regularLabel="8 Kg"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/wash/11"}
              label={"Map"}
              icon={"fire"}
              boldLabel={"Số. 11"}
              regularLabel="7 Kg"
            />
          </View>
        </View>

        <View className="items-start flex-row px-4 py-3">
          <RegularText label={"Đặt máy giặt"} />
        </View>

        <View className="mt-3 px-7 flex-row flex-wrap justify-start">
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/(tabs)/(home)/details"}
              label={"Map"}
              icon={"water"}
              boldLabel={"Số. 2"}
              regularLabel="Còn 15 phút"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/(tabs)/(home)/details"}
              label={"Map"}
              icon={"fire"}
              boldLabel={"Số. 3"}
              regularLabel="Còn 20 phút"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/(tabs)/(home)/details"}
              label={"Map"}
              icon={"fire"}
              boldLabel={"Số. 6"}
              regularLabel="Còn 2 phút"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/(tabs)/(home)/details"}
              label={"Map"}
              icon={"water"}
              boldLabel={"Số. 7"}
              regularLabel="Còn 35 phút"
            />
          </View>
          <View className="w-1/3 p-1">
            <SmallButton
              destination={"/(tabs)/(home)/details"}
              label={"Map"}
              icon={"fire"}
              boldLabel={"Số. 12"}
              regularLabel="Còn 10 phút"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
