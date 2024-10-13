import React, { useState, useEffect, useRef } from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import Button from "@/components/button/Button";
import PhoneInput from "@/components/input/PhoneInput";
import BoldText from "@/components/text/BoldText";
import NavigateText from "@/components/text/NavigateText";
import RegularText from "@/components/text/RegularText";
import { useUser } from "@/contexts/UserContext"; // Import useUser hook
import { useRouter } from "expo-router"; // Import useRouter for navigation
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // Local state to store the input
  const { setPhoneNumber: setGlobalPhoneNumber } = useUser(); // Destructure the setPhoneNumber function from context
  const router = useRouter(); // Initialize router for navigation
  const [expoPushToken, setExpoPushToken] = useState<string>(""); // Store push token
  const notificationListener = useRef<Notifications.Subscription>(); // Listeners for notifications
  const responseListener = useRef<Notifications.Subscription>();

  // Function to handle OTP button press
  const handleOtpSend = async () => {
    const otpCode = Math.floor(1000 + Math.random() * 9999).toString(); // Generate a random 6-digit OTP

    // Send the OTP via push notification
    await sendPushNotification(otpCode);

    // Set phone number in context and navigate to OTP screen
    setGlobalPhoneNumber(phoneNumber);
    router.push("/(auth)/otp");
  };

  // Register for push notifications and get the token
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log("Notification received:", notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("Notification response received:", response);
    });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 items-center justify-center bg-white">
          {/* Title Section */}
          <View className="flex-1 justify-center mt-36">
            <View className="my-2">
              <BoldText label={"Số Điện Thoại"} />
            </View>
          </View>

          {/* Input Section */}
          <View className="flex-1 justify-start mb-72">
            <View className="my-5">
              <PhoneInput
                value={phoneNumber}
                onChangeText={setPhoneNumber} // Update the state with the input
              />
            </View>

            <Button
              onPress={handleOtpSend} // Call handleOtpSend when button is pressed
              label={"Gửi OTP"}
              width={350}
              flex={0}
            />

            <View className="mt-5">
              <RegularText label={"Hãy nhập số điện thoại của bạn"} />
            </View>
          </View>

          {/* Button Section */}
          <View className="flex-1 flex-row justify-end">
            <RegularText label={"Bạn đã có tài khoản? "} />
            <NavigateText destination={"/(auth)/login"} label={"Đăng nhập"} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Function to schedule a push notification with the OTP
async function sendPushNotification(otpCode: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "OTP của bạn đã tới! 📬",
      body: `Mã OTP để đăng nhập vào Easy Laundry là: ${otpCode}`,
    },
    trigger: { seconds: 2 },
  });
}

// Function to register for push notifications
async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notifications!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig?.extra?.eas?.projectId ?? Constants.easConfig?.projectId,
    })).data;
    console.log("Expo Push Token:", token);
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  return token;
}
