import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { CameraMode } from "expo-camera";

interface BottomRowsToolsProps {
  cameraMode: CameraMode;
  setCameraMode: React.Dispatch<React.SetStateAction<CameraMode>>;
}

export default function BottomRowsTools({
  cameraMode,
  setCameraMode,
}: BottomRowsToolsProps) {
  return (
    <View style={[styles.bottomContainer, styles.directionRowItemsCenter]}>
      <Link href={"/media-library"} asChild>
        <IconButton
          iconName="library"
          size={25}
          iconColor="white"
          onPress={() => {}}
        />
      </Link>
      <View style={styles.directionRowItemsCenter}>
        <TouchableOpacity onPress={() => setCameraMode("picture")}>
          <ThemedText
            style={{
              fontWeight: cameraMode === "picture" ? "bold" : "100",
              color: "#ffffff",
            }}
          >
            Snap
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCameraMode("video")}>
          <ThemedText
            style={{
              fontWeight: cameraMode === "video" ? "bold" : "100",
              color: "#ffffff",
            }}
          >
            Video
          </ThemedText>
        </TouchableOpacity>
      </View>
      <IconButton iconName="search" iconColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  directionRowItemsCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    alignSelf: "center",
    bottom: 6,
  },
});
