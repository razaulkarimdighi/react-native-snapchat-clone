import * as React from "react";
import AsyncStorge from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useFirstTimeOpen() {
  const [isFirstTime, setIsFirstTime] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function checkFirstTimeOpen() {
      try {
        const hasOpened = await AsyncStorage.getItem("hasOpened");

        if (hasOpened === null) {
          //first time
          setIsFirstTime(true);
        } else {
          setIsFirstTime(false);
        }
      } catch (e) {
        console.log("error getting local first time", e);
      } finally {
        setIsLoading(false);
      }
    }
    checkFirstTimeOpen();
  }, []);
  return { isFirstTime, isLoading };
}
