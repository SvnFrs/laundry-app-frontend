import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import IconButton from "@/components/button/IconButton";
import ComplexButton from "@/components/button/ComplexButton";
import { Feather } from "@expo/vector-icons";
import BigButton from "@/components/button/BigButton";
import ImageViewer from "@/components/image/ImageViewer";
import BackButton from "@/components/button/BackButton";
import Button from "@/components/button/Button";

const avatarImage = require("../../../assets/images/sample/avatar.jpg");

export default function Payment() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 justify-center bg-white">
        <View className="absolute top-10">
          <BackButton destination={"/(tabs)/(home)"} />
        </View>
        <View className="mt-12 items-center">
          <BoldText label={"Thanh toán"} />
        </View>

        <View className="items-center mt-16">
          <View className="my-1">
            <ComplexButton
              destination={"/payment"}
              boldLabel={"Ưu đãi"}
              label={">"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"ticket"}
              iconColor={"#65c8ce"}
              regularLabel="0 ưu đãi còn lại"
            />
          </View>
        </View>

        <View className="justify-start my-5 px-40 bg-slate-100">
          <View className="py-6">
            <View className="py-1">
              <ComplexButton
                destination={"/payment"}
                boldLabel={"Viet QR"}
                label={"20 000 đồng"}
                buttonColor={"white"}
                width={350}
                flex={0}
                icon={"ticket"}
                iconColor={"#65c8ce"}
                regularLabel="+ Số UID Ngân Hàng"
              />
            </View>
            <View className="py-1">
              <ComplexButton
                destination={"/payment"}
                boldLabel={"Momo"}
                label={"20 000 đồng"}
                buttonColor={"white"}
                width={350}
                flex={0}
                icon={"ticket"}
                iconColor={"#65c8ce"}
                regularLabel="Số điện thoại"
              />
            </View>

            <View className="py-1">
              <Button
                destination={"/(home)/payment"}
                label={"Thanh toán"}
                width={350}
                flex={1}
              />
            </View>
          </View>
        </View>

        <View className="flex-1 flex-row my-9 justify-end">
          <View className="flex-1 justify-center items-center mb-32">
            <IconButton
              destination={"/"}
              label={"Còn 90s"}
              icon={"clock"}
              textColor="black"
              iconColor="#65c8ce"
              buttonColor="gray"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
