import { TextProps } from "@/types/TextProps"
import React from "react"
import { Text } from "react-native"

export default function RegularText({ label }: TextProps) {
    return (
        <Text className="text-sm text-gray-500">{label}</Text>
    )
}