import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlashMode } from "expo-camera";
import IconButton from "./IconButton";

interface CameraToolsProps {
  cameraZoom: number;
  cameraFlash: FlashMode;
  cameraTorch: boolean;
  setCameraZoom: React.Dispatch<React.SetStateAction<number>>;
  setCameraFacing: React.Dispatch<React.SetStateAction<"front" | "back">>;
  setCameraTorch: React.Dispatch<React.SetStateAction<boolean>>;
  setCameraFlash: React.Dispatch<React.SetStateAction<FlashMode>>;
}
export default function CameraTools({
  cameraZoom,
  cameraFlash,
  cameraTorch,
  setCameraZoom,
  setCameraFacing,
  setCameraTorch,
  setCameraFlash,
}: CameraToolsProps) {
  return (
    <View
      style={{
        position: "absolute",
        right: 6,
        top: 40,
        gap: 16,
      }}
    >
      <IconButton
        iconName={"flashlight"}
        iconColor={"#ffffff"}
        onPress={() => setCameraTorch((prev) => !prev)}
      />
      <IconButton
        iconName={"flash"}
        iconColor={"#ffffff"}
        onPress={() =>
          setCameraFacing((prev) => (prev === "back" ? "front" : "back"))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
