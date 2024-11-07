import { useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import BoldText from "@/components/text/BoldText";
import IconButton from "@/components/button/IconButton";
import ComplexButton from "@/components/button/ComplexButton";
import BackButton from "@/components/button/BackButton";
import Button from "@/components/button/Button";
import PaymentButton from "@/components/button/PaymentButton";
import { BlurView } from "expo-blur"; // Import BlurView for blurring
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification"; // Import the Dialog popup
import { useOrder } from "@/contexts/OrderContext";
import SmartButton from "@/components/button/SmartButton";

const vietQR = require("../../../../assets/images/sample/vietqr.png");
const momo = require("../../../../assets/images/sample/momo.jpg");

export default function Payment() {
  const { addOrderId, setProgress } = useOrder();
  const { id } = useLocalSearchParams();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(90); // Initialize countdown with 90 seconds
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading indicator
  const router = useRouter(); // Create a router instance for navigation

  const handleSelect = (buttonId: string) => {
    setSelectedButton((prev) => (prev === buttonId ? null : buttonId));
  };

  // Countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Decrease countdown every second
      return () => clearTimeout(timer); // Clear the timer when the component unmounts or countdown changes
    }
  }, [countdown]);

  // Handle 'Thanh toán' button press
  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addOrderId(id as string); // Append new order ID to the context
      setProgress(100); // Reset progress

      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Hoàn tất thanh toán rồi!",
        textBody: "Easy Laundry sẽ giặt đồ sạch tinh tươm cho bạn ngay.",
        button: "Tiếp tục",
        onPressButton: () => {
          Dialog.hide();
          router.push(`/status/${id}`);
        },
      });
    }, 10000);
  };

  return (
    <AlertNotificationRoot>
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
              <SmartButton
                destination={"/payment"}
                boldLabel={"Ưu đãi"}
                regularLabel="0 ưu đãi còn lại"
                buttonColor={"gray"}
                width={350}
                icon={"gift"}
                additionalInfo="Bạn hiện không có ưu đãi nào"
                selected={selectedButton === "button0"}
                onPress={() => handleSelect("button0")}
              />
            </View>
          </View>

          <View className="flex-grow justify-start my-5 px-40 bg-slate-100">
            <View className="py-6">
              <View className="py-1">
                <PaymentButton
                  destination={"/payment"}
                  boldLabel={"Viet QR"}
                  label={"20 000 đồng"}
                  regularLabel="+ Số UID Ngân Hàng"
                  buttonColor={"gray"}
                  width={350}
                  icon={"ticket"}
                  additionalInfo={vietQR}
                  selected={selectedButton === "button1"}
                  onPress={() => handleSelect("button1")}
                />
              </View>
              <View className="py-1">
                <PaymentButton
                  destination={"/payment"}
                  boldLabel={"Momo"}
                  label={"20 000 đồng"}
                  regularLabel="Số điện thoại"
                  buttonColor={"gray"}
                  width={350}
                  icon={"ticket"}
                  additionalInfo={momo}
                  selected={selectedButton === "button2"}
                  onPress={() => handleSelect("button2")}
                />
              </View>

              <View className="py-1">
                <Button
                  onPress={handlePayment} // Trigger loading and payment
                  label={"Thanh toán"}
                  width={350}
                  flex={0}
                />
              </View>
            </View>
          </View>

          <View className="flex-1 flex-row my-9 justify-end">
            <View className="flex-1 justify-center items-center mb-32">
              <IconButton
                destination={"/"}
                label={`Còn ${countdown}s`} // Display the countdown
                icon={"clock"}
                textColor="black"
                iconColor="#65c8ce"
                buttonColor="gray"
              />
            </View>
          </View>

          {/* Show loading indicator and blur when payment is processing */}
          {isLoading && (
            <BlurView
              intensity={50}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#65c8ce" />
              </View>
            </BlurView>
          )}
        </View>
      </ScrollView>
    </AlertNotificationRoot>
  );
}
