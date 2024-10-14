import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Button from "@/components/button/Button";
import BoldText from "@/components/text/BoldText";
import SearchInput from "@/components/input/SearchInput";
import Map from "@/components/map/Map";
import RegularText from "@/components/text/RegularText";
import IconButton from "@/components/button/IconButton";
import ImageViewer from "@/components/image/ImageViewer";
import { FontAwesome6 } from "@expo/vector-icons";

const mapImage = require("../../assets/images/sample/map.png");

export default function Chooser() {
  const initialRegion = {
    latitude: 10.012673664172128,
    longitude: 105.73276419064307,
    latitudeDelta: 0.05,
    longitudeDelta: 0.04,
  };

  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleLocationSelect = (location: {
    latitude: number;
    longitude: number;
  }) => {
    setSelectedLocation(location);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center bg-white">
          {/* Title Section */}
          <View className="mt-12 justify-center items-center">
            <View className="my-2">
              <BoldText label={"Chọn Vị Trí"} />
            </View>
          </View>

          {/* Input Section */}
          <View className="justify-start items-center">
            <View className="mt-2">
              <SearchInput />
            </View>
          </View>

          {/* Map Section */}
          <View
            className="flex-1 items-center"
            style={{ width: "100%", height: 500 }}
          >
            {/* <Map
              initialRegion={initialRegion}
              onLocationSelect={handleLocationSelect}
            /> */}

            <View className="flex-none justify-center items-center mt-2">
              <ImageViewer source={mapImage} width={350} height={500} />
            </View>

            <View className="absolute bottom-24">
              <IconButton
                destination={"/(location)/chooser"}
                label={"Lưu"}
                icon={"bookmark"}
              />
            </View>

            <View className="items-start pr-20 mt-10">
              <View className="absolute right-72">
                <FontAwesome6 name="location-dot" size={24} color="#65c8ce" />
              </View>

              <BoldText label={"Xác nhận vị trí"} />
              <RegularText label={"Đại học FPT Cần Thơ, Cần Thơ"} />
            </View>
          </View>

          <View className="flex-1 flex-row mb-9">
            <Button
              destination={"/(location)/list"}
              label={"Xác nhận vị trí"}
              width={350}
              flex={1}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
