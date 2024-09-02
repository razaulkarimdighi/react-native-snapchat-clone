import * as React from "react";

import { Image, StyleSheet, Platform, View, SafeAreaView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import {
  CameraView,
  CameraMode,
  BarcodeScanningResult,
  FlashMode,
} from "expo-camera";
import * as WebBrowser from "expo-web-browser";
import IconButton from "@/components/IconButton";
import BottomRowsTools from "@/components/BottomRowsTools";
import MainRowActions from "@/components/MainRowActions";
import QRCodeButton from "@/components/QrCodeButton";
import CameraTools from "@/components/CameraTools";
import PictureView from "@/components/PictureView";
// import VideoViewComponent from "@/components/VideoView";

export default function HomeScreen() {
  const cameraRef = React.useRef<CameraView>(null);
  const [cameraMode, setCameraMode] = React.useState<CameraMode>("picture");
  const [qrCodeDetected, setQrCodeDetected] = React.useState<string>("");
  const [isBrowsing, setIsBrowsing] = React.useState<boolean>(false);

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [cameraZoom, setCameraZoom] = React.useState<number>(0);
  const [cameraTorch, setCameraTorch] = React.useState<boolean>(false);
  const [cameraFlash, setCameraFlash] = React.useState<FlashMode>("off");
  const [cameraFacing, setCameraFacing] = React.useState<"front" | "back">(
    "back"
  );
  const [picture, setPicture] = React.useState<string>("");
  const [video, setVideo] = React.useState<string>(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  ); //  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

  async function handleTakePicture() {
    const response = await cameraRef.current?.takePictureAsync({});
    console.log(response?.uri);
    setPicture(response!.uri);
  }

  async function handleOpenQRCode() {
    console.log("testHandle");
    setIsBrowsing(true);
    const browserResult = await WebBrowser.openBrowserAsync(qrCodeDetected, {
      presentationStyle: WebBrowser.WebBrowserPresentationStyle.FORM_SHEET,
    });
    if (browserResult.type === "cancel") {
      setIsBrowsing(false);
    }
  }

  function handleBarcodeScanned(scanningResult: BarcodeScanningResult) {
    if (scanningResult.data) {
      console.log(scanningResult.data);
      setQrCodeDetected(scanningResult.data);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setQrCodeDetected("");
    }, 1000);
  }

  if (isBrowsing) return <></>;
  if (picture) return <PictureView picture={picture} setPicture={setPicture} />;
  // if (video) return <VideoViewComponent video={video} setVideo={setVideo} />;

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={cameraRef}
        mode={cameraMode}
        zoom={cameraZoom}
        flash={cameraFlash}
        enableTorch={cameraTorch}
        facing={cameraFacing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={handleBarcodeScanned}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {qrCodeDetected ? (
              <QRCodeButton handleOpenQRCode={handleOpenQRCode} />
            ) : null}

            <CameraTools
              cameraZoom={cameraZoom}
              cameraFlash={cameraFlash}
              cameraTorch={cameraTorch}
              setCameraZoom={setCameraZoom}
              setCameraFacing={setCameraFacing}
              setCameraTorch={setCameraTorch}
              setCameraFlash={setCameraFlash}
            />

            <MainRowActions
              cameraMode={cameraMode}
              handleTakePicture={handleTakePicture}
              isRecording={false}
            />
            <BottomRowsTools
              setCameraMode={setCameraMode}
              cameraMode={cameraMode}
            />
          </View>
        </SafeAreaView>
      </CameraView>
    </View>
  );
}
