import { TextProps } from "@/types/TextProps"
import React from "react"
import { Text } from "react-native"

export default function BoldText({ label }: TextProps) {
    return (
        <Text className="text-xl font-extrabold max-w-xs text-center">{label}</Text>
    )
}