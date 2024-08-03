import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {

  useFonts({
    "Outfit":require('./../assets/fonts/Outfit-Regular.ttf'),
    "Outfit-medium":require('./../assets/fonts/Outfit-Medium.ttf'),
    "Outfit-bold":require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  return (
    <Stack screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
