import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useOrder } from "@/contexts/OrderContext";

export default function Progress() {
  const { progress, setProgress, isComplete, setIsComplete } = useOrder();
  const totalDuration = 420; // Total duration in seconds (7 minutes)

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval);
          setIsComplete(true); // Set completion state in context
          return 0;
        }
        return prevProgress - 100 / totalDuration;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setProgress, setIsComplete]);

  const remainingTime = Math.round((progress / 100) * totalDuration);
  const remainingPercentage = Math.round((remainingTime / totalDuration) * 100);

  return (
    <View>
      {isComplete ? (
        <View>
        </View>
      ) : (
        <>
          <AnimatedCircularProgress
            size={260}
            width={25}
            fill={progress}
            tintColor="#65c8d0"
            backgroundColor="#f5f5f5"
            rotation={0}
          />
          <Text className="absolute align-middle right-24 bottom-28 font-bold text-3xl">
            {remainingPercentage}%
          </Text>
        </>
      )}
    </View>
  );
}
