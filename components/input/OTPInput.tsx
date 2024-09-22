import React, { useState, useRef } from "react";
import { TextInput, View } from "react-native";

export default function OTPInput() {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const inputRefs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null)
    ];

    const handleChange = (value: string, index: number) => {
        const newOtp = [...otp];

        if (value === "" && index > 0) {
            inputRefs[index - 1].current?.focus();
        }

        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== "" && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };


    return (
        <View className="flex-row justify-between items-center rounded-lg px-12">
            {otp.map((digit, index) => (
                <TextInput
                    key={index}
                    className="w-12 h-12 bg-gray-100 text-center font-bold rounded"
                    value={digit}
                    onChangeText={(value) => handleChange(value, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={inputRefs[index]}
                />
            ))}
        </View>
    );
}
