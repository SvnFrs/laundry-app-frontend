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

const avatarImage = require('../../../assets/images/sample/avatar.jpg');

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
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
            <BoldText label={"Nguyên"} />
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
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Ưu đãi"}
              label={">"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"ticket"}
              iconColor={"#65c8ce"}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Feedback"}
              label={">"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"users-gear"}
              iconColor={"#65c8ce"}
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
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Trung tâm hỗ trợ"}
              label={">"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"headphones"}
              iconColor={"#65c8ce"}
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
