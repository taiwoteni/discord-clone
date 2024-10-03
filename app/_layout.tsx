import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false,
        statusBarTranslucent:true,
      }}/>
      <Stack.Screen name="login/index" options={{
        headerShown:false,
        statusBarTranslucent:true,
      }}/>
      <Stack.Screen name="register/index" options={{
        headerShown:false,
        statusBarTranslucent:true,
      }}/>
    </Stack>
  );
}
