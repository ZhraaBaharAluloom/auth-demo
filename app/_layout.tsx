import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            title: "",
            headerShadowVisible: false,
            headerTintColor: "#deddd1ff",
            headerTitleStyle: { color: "#deddd1ff" },
            headerStyle: { backgroundColor: "#2D2E2F" },
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
