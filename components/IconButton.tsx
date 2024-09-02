import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CONTAINER_PADDING = 10;
const CONTAINER_WIDTH = 34;
const ICON_SIZE = 25;

// Define the interface for the component props
interface IconButtonProps {
  iconName: string; // Dynamic icon name
  iconSize?: number;
  iconColor?: string;
  label?: string;
  onPress?: () => void;
  width?: number;
  height?: number;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
  iconPosition?: "left" | "right"; // Position of the icon relative to the label
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  iconSize = 24,
  iconColor = "black",
  label,
  onPress,
  buttonStyle,
  labelStyle,
  iconPosition = "left",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[
        {
          backgroundColor: "#00000050",
          padding: CONTAINER_PADDING,
          // borderRadius: (CONTAINER_WIDTH + CONTAINER_PADDING * 2) / 2,
          // width: CONTAINER_WIDTH,
          borderRadius: 100,
        },
      ]}
    >
      {iconPosition === "left" && (
        <Ionicons
          name={iconName as any}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {iconPosition === "right" && (
        <Ionicons
          name={iconName as any}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#00000050",
    borderRadius: 5,
  },
  label: {
    color: "white",
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default IconButton;
