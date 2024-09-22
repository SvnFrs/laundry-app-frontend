import React from "react";
import { ImageProps } from "@/types/ImageProps";
import { Image } from "react-native";

export default function ImageViewer({ source, width, height }: ImageProps) {
  return (
    <Image
      className="rounded-xl"
      style={{ width, height }}
      source={source}
    />
  );
}
