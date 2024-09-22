import React from "react";
import { View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import NavigationButton from "./NavigationButton";

export default function NavigationBar({
  state,
  descriptors,
  navigation,
  isVisible = true, // New prop to control visibility
}: BottomTabBarProps & { isVisible?: boolean }) {
  if (!isVisible) {
    return null; // Return null to hide the tab bar
  }

  return (
    <View className="absolute bottom-0 flex-row justify-between items-center bg-sky-500 py-8 w-full px-4 rounded-t-3xl">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <NavigationButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label}
          />
        );
      })}
    </View>
  );
}
