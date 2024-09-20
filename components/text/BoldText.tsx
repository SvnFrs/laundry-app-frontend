import { TextProps } from "@/types/TextProps"
import React from "react"
import { Text } from "react-native"

export default function BoldText({ label }: TextProps) {
    return (
        <Text className="text-xl font-extrabold">{label}</Text>
    )
}