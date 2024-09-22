import { TextProps } from "@/types/TextProps"
import React from "react"
import { Text } from "react-native"

export default function SmallText({ label }: TextProps) {
    return (
        <Text className="text-xs max-w-sm text-center text-gray-500">{label}</Text>
    )
}