import ComplexButton from "@/components/button/ComplexButton";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import { useOrder } from "@/contexts/OrderContext";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const { orderIds, progress } = useOrder();
  const duration = 420; // 7 minutes in seconds

  // Calculate remaining time in seconds
  const remainingTimeInSeconds = Math.round((progress / 100) * duration);
  const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 justify-start bg-white">
        {orderIds.length > 0 && ( // Display ongoing orders if available
          <>
            <View className="flex-row ml-8 my-12 justify-between items-start">
              <View className="mt-12 items-center">
                <BoldText label={"Giỏ hàng của bạn"} />
              </View>
            </View>

            <View className="justify-start items-center">
              {orderIds.map((orderId) => (
                <View key={orderId} className="my-1">
                  <ComplexButton
                    destination={`/status/${orderId}`} // Use each orderId to navigate
                    boldLabel={`Máy số ${orderId}`} // Display order information
                    label={`Còn lại ${remainingMinutes} phút`} // Display remaining time in minutes
                    buttonColor={"gray"}
                    width={350}
                    flex={0}
                    icon={"shirt"}
                    iconColor={"#65c8ce"}
                  />
                </View>
              ))}
            </View>
          </>
        )}

        {orderIds.length === 0 && (
          <View className="flex-1 justify-center items-center">
            <BoldText label={"Giỏ hàng của bạn hiện đang trống :<"} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
