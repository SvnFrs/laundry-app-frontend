import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useOrder } from "@/contexts/OrderContext"; // Adjust the path

export default function Progress() {
  const { progress, setProgress } = useOrder();
  const totalDuration = 420; // Total duration in seconds (7 minutes)

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval); // Stop when progress reaches 0
          return 0;
        }
        return prevProgress - (100 / totalDuration); // Decrease progress proportionally
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [setProgress]);

  // Calculate remaining time in seconds
  const remainingTime = Math.round((progress / 100) * totalDuration);
  // Calculate the remaining percentage
  const remainingPercentage = Math.round((remainingTime / totalDuration) * 100);

  return (
    <View>
      <AnimatedCircularProgress
        size={250}
        width={25}
        fill={progress} // This value updates every second
        tintColor="#65c8d0" // Upper color
        backgroundColor="#f5f5f5" // Bottom color
        rotation={0} // Rotate to load in reverse (counterclockwise)
      />
      <Text className="absolute align-middle right-24 bottom-28 font-bold text-3xl">{remainingPercentage}%</Text>
    </View>
  );
}
