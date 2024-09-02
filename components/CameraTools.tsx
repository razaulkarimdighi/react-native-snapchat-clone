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
        onPress={() =>
          setCameraFacing((prevValue) =>
            prevValue === "back" ? "front" : "back"
          )
        }
        iconName="camera-outline"
        iconColor="white"
        width={25}
        height={21}
      />
      <IconButton
        onPress={() =>
          setCameraFlash((falshValue) => (falshValue === "off" ? "on" : "off"))
        }
        iconName="flash"
        iconColor="white"
      />
      <IconButton
        onPress={() => {
          // increment by .01
          if (cameraZoom < 1) {
            setCameraZoom((prevValue) => prevValue + 0.01);
          }
        }}
        iconName="add-circle-outline"
        iconColor="#ffffff"
      />
      <IconButton
        onPress={() => {
          // decrement by .01
          if (cameraZoom > 0) {
            setCameraZoom((prevValue) => prevValue - 0.01);
          }
        }}
        iconName="close"
        iconColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
