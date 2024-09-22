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

const laundryShopImage = require("../../../assets/images/sample/laundry_shop.jpeg");

export default function Index() {
  const [isFirstTime, setIsFirstTime] = useState(false); // Simulating first launch
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isFirstTime) {
      // Delay the navigation slightly to ensure the layout is mounted
      timeout = setTimeout(() => {
        router.push("/(guides)");
      }, 100); // 100ms delay
    }
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [isFirstTime]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 justify-center bg-white">
        {/* Title Section */}
        <View className="flex-row mt-12 ml-8 justify-between items-center">
          <View className="my-2">
            <BoldText label={"Xin chào Nguyên!"} />
          </View>
          <View className="my-2 px-8 flex-row justify-between space-x-6">
            <TouchableOpacity>
              <Feather name="bell" color={"#65c8ce"} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="info" color={"#65c8ce"} size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="justify-start items-center">
          <View className="mt-2">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Nhà"}
              buttonColor={"sky"}
              regularLabel={"Nguyễn Văn Cừ, Cần Thơ"}
              width={350}
              flex={0}
              icon={"location-arrow"}
              iconColor={"#fff"}
              textColor={"white"}
            />
          </View>
        </View>

        <View className="items-start flex-row px-4 pt-4 py-2">
          <RegularText label={"Hôm nay bạn muốn giặt đồ gì nè"} />
        </View>

        <View className="mt-3 px-7 flex-row items-center justify-between">
          <BigButton
            destination={"/(tabs)/(home)/details"}
            label={"Map"}
            icon={"water"}
            boldLabel={"Giặt thường"}
            regularLabel="Giặt để đón chào những điều may mắn"
          />
          <BigButton
            destination={"/(tabs)/(home)/details"}
            label={"Map"}
            icon={"fire"}
            boldLabel={"Xả khô"}
            regularLabel="Quần áo cũng cần phải khô ráo mới vui vẻ chứ"
          />
        </View>

        <View className="items-start flex-row px-6 py-6">
          <RegularText label={"Siêu sale"} />
        </View>

        <View className="flex-none justify-center items-center">
          <ImageViewer source={laundryShopImage} width={350} height={150} />
        </View>

        <View className="items-start flex-row px-6 py-6">
          <RegularText label={"Ongoing Orders"} />
        </View>

        <View className="justify-start items-center">
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)/details"}
              boldLabel={"Washing machine 4"}
              label={"3 mins left"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"shirt"}
              iconColor={"#65c8ce"}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)/details"}
              boldLabel={"Washing machine 11"}
              label={"38 mins left"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"shirt"}
              iconColor={"#65c8ce"}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Washing machine 7"}
              label={"8 mins left"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"shirt"}
              iconColor={"#65c8ce"}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Washing machine 1"}
              label={"45 mins left"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"shirt"}
              iconColor={"#65c8ce"}
            />
          </View>
          <View className="my-1">
            <ComplexButton
              destination={"/(tabs)/(home)"}
              boldLabel={"Washing machine 29"}
              label={"22 mins left"}
              buttonColor={"gray"}
              width={350}
              flex={0}
              icon={"shirt"}
              iconColor={"#65c8ce"}
            />
          </View>
        </View>

        {/* Button Section */}
        <View className="flex-1 flex-row my-9 justify-end">
          <View className="flex-1 justify-end items-center">
            <IconButton
              destination={"/(tabs)/home"}
              label={"Map"}
              icon={"map"}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
