import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, marginBottom: 0, backgroundColor: "#2D2E2F" }}
        edges={["top", "left", "right"]}
      >
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen
              name="login"
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

            <Stack.Screen
              name="about"
              options={{
                title: "",
                headerShadowVisible: false,
                headerTintColor: "#deddd1ff",
                headerTitleStyle: { color: "#deddd1ff" },
                headerStyle: { backgroundColor: "#2D2E2F" },
              }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
                headerTintColor: "#deddd1ff",
                headerTitleStyle: { color: "#deddd1ff" },

                headerStyle: { backgroundColor: "#2D2E2F" },
              }}
            />
            <Stack.Screen
              name="restaurants/[restaurantId]"
              options={{
                title: "Dish Details",
                headerTintColor: "#deddd1ff",
                headerTitleStyle: { color: "#deddd1ff" },
                headerStyle: { backgroundColor: "#2D2E2F" },
                headerBackTitle: "Restaurants",
              }}
            />
          </Stack>
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
