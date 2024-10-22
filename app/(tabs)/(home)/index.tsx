import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import ComplexButton from "@/components/button/ComplexButton";
import { Feather } from "@expo/vector-icons";
import BigButton from "@/components/button/BigButton";
import ImageViewer from "@/components/image/ImageViewer";
import { useUser } from "@/contexts/UserContext";
import { useOrder } from "@/contexts/OrderContext";

const laundryShopImage = require("../../../assets/images/sample/laundry_shop.jpeg");

export default function Index() {
  const [isFirstTime, setIsFirstTime] = useState(true); // Simulating first launch
  const router = useRouter();
  const { phoneNumber } = useUser();
  const { orderId, progress } = useOrder(); // Use the order context
  const duration = 420; // 7 minutes in seconds

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

  // Calculate remaining time in seconds
  const remainingTimeInSeconds = Math.round((progress / 100) * duration);
  const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 justify-center bg-white">
        {/* Title Section */}
        <View className="flex-row mt-12 ml-8 justify-between items-center">
          <View className="my-2">
            <BoldText label={"Xin chào " + phoneNumber} />
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

        <View className="mt-3 px-5 flex-row items-center justify-between">
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
        
        {orderId && ( // Display ongoing order if available
          <>
            <View className="items-start flex-row px-6 py-6">
              <RegularText label={"Đơn hàng hiện tại"} />
            </View>
            <View className="justify-start items-center">
              <View className="my-1">
                <ComplexButton
                  destination={`/status/${orderId}`} // Use orderId to navigate
                  boldLabel={`Máy số ${orderId}`} // Display order information
                  label={`Còn lại ${remainingMinutes} phút`} // Display remaining time in minutes and seconds
                  buttonColor={"gray"}
                  width={350}
                  flex={0}
                  icon={"shirt"}
                  iconColor={"#65c8ce"} 
                />
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}
