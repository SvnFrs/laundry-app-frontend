import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import BoldText from "@/components/text/BoldText";
import IconButton from "@/components/button/IconButton";
import ComplexButton from "@/components/button/ComplexButton";
import BackButton from "@/components/button/BackButton";
import Button from "@/components/button/Button";
import PaymentButton from "@/components/button/PaymentButton";

const vietQR = require("../../../assets/images/sample/vietqr.png");
const momo = require("../../../assets/images/sample/momo.jpg");

export default function Payment() {
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
                destination={"/"}
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
