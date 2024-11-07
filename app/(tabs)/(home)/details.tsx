import React from "react";
import { View, ScrollView, Text } from "react-native";
import BoldText from "@/components/text/BoldText";
import RegularText from "@/components/text/RegularText";
import { Feather } from "@expo/vector-icons";
import SmallText from "@/components/text/SmallText";
import SmallButton from "@/components/button/SmallButton";
import BackButton from "@/components/button/BackButton";
import { useOrder } from "@/contexts/OrderContext";

export default function Details() {
  const { orderIds, progress } = useOrder();
  const duration = 420; // 7 minutes in seconds
  const remainingTimeInSeconds = Math.round((progress / 100) * duration);
  const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);

  // Define all machines
  const machines = [
    { id: 1, label: "7 Kg", destination: "/wash/1", icon: "water" },
    { id: 4, label: "7 Kg", destination: "/wash/4", icon: "water" },
    { id: 5, label: "7 Kg", destination: "/wash/5", icon: "fire" },
    { id: 8, label: "6 Kg", destination: "/wash/8", icon: "fire" },
    { id: 9, label: "8 Kg", destination: "/wash/9", icon: "water" },
    { id: 10, label: "8 Kg", destination: "/wash/10", icon: "fire" },
    { id: 11, label: "7 Kg", destination: "/wash/11", icon: "fire" },
  ];

  // Default booked machines
  const defaultBookedMachines = [
    { id: 2, remainingMinutes: 15, icon: "water" },
    { id: 3, remainingMinutes: 20, icon: "fire" },
    { id: 6, remainingMinutes: 2, icon: "fire" },
    { id: 7, remainingMinutes: 35, icon: "water" },
    { id: 12, remainingMinutes: 10, icon: "fire" },
  ];

  // Split machines into available and booked
  const availableMachines = machines.filter(
    (machine) => !orderIds.includes(machine.id.toString())
  );
  const bookedMachines = [
    ...defaultBookedMachines,
    ...machines
      .filter((machine) => orderIds.includes(machine.id.toString()))
      .map((machine) => ({
        id: machine.id,
        remainingMinutes, // Example remaining time for custom orders
        icon: machine.icon,
      })),
  ];

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

        {/* Available Machines Section */}
        <View className="my-3 px-7 flex-row flex-wrap justify-start">
          {availableMachines.map((machine) => (
            <View key={machine.id} className="w-1/3 p-1">
              <SmallButton
                destination={machine.destination}
                label={"Map"}
                icon={machine.icon}
                boldLabel={`Số. ${machine.id}`}
                regularLabel={machine.label}
              />
            </View>
          ))}
        </View>

        <View className="items-start flex-row px-4 py-3">
          <RegularText label={"Máy giặt hiện đang được đặt"} />
        </View>

        {/* Booked Machines Section */}
        <View className="mt-3 px-7 flex-row flex-wrap justify-start">
          {bookedMachines.map((machine) => (
            <View key={machine.id} className="w-1/3 p-1">
              <SmallButton
                destination={"/(tabs)/(home)/details"}
                label={"Map"}
                icon={machine.icon}
                boldLabel={`Số. ${machine.id}`}
                regularLabel={`Còn ${machine.remainingMinutes} phút`}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
