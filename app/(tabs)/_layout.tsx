import React from "react";
import { Tabs, usePathname } from "expo-router";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function TabLayout() {
  const pathname = usePathname();

  const shouldHideTabBar = pathname.includes("/wash/") || pathname.includes("/rinse/") || pathname.includes("/payment") || pathname.includes("/status")

  return (
    <>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => (
          <NavigationBar {...props} isVisible={!shouldHideTabBar} />
        )}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="(qr)"
          options={{
            title: "QR",
          }}
        />
        <Tabs.Screen
          name="(cart)"
          options={{
            title: "Cart",
          }}
        />
        <Tabs.Screen
          name="(profile)"
          options={{
            title: "Profile",
          }}
        />
      </Tabs>
    </>
  );
}
