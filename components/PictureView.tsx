import { Image, ImageBackground } from "expo-image";
import * as React from "react";
import { Alert, View } from "react-native";
import IconButton from "./IconButton";
import { saveToLibraryAsync } from "expo-media-library";
import { shareAsync } from "expo-sharing";

interface PictureViewProps {
  picture: string;
  setPicture: React.Dispatch<React.SetStateAction<string>>;
}

export default function PictureView({ picture, setPicture }: PictureViewProps) {
  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          paddingTop: 50,
          left: 6,
        }}
      >
        <IconButton
          iconName="close"
          iconColor="white"
          onPress={() => setPicture("")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          right: 6,
          zIndex: 1,
          paddingTop: 50,
          gap: 16,
        }}
      >
        <IconButton
          iconName="arrow-down-circle-outlinesquare"
          iconColor="white"
          onPress={async () => {
            await saveToLibraryAsync(picture);
            Alert.alert("Picture Saved!!!");
          }}
        />
        <IconButton
          iconName="square-outline"
          iconColor="white"
          onPress={() => setPicture("")}
        />
        <IconButton
          iconName="triangle-outline"
          iconColor="white"
          onPress={() => setPicture("")}
        />
        <IconButton
          iconName="triangle-outline"
          iconColor="white"
          onPress={async () => await shareAsync(picture)}
        />
      </View>

      <Image
        source={picture}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
}
