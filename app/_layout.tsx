import { getToken } from "@/api/storage";
import AuthContext from "@/utils/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const queryClient = new QueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  console.log("🚀 ~ RootLayout ~ isAuthenticated:", isAuthenticated);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      console.log("🚀 ~ checkToken ~ token:", token);
      if (token) setIsAuthenticated(true);
      else setIsAuthenticated(false);
      setIsReady(true);
    };
    checkToken();
  });

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"orange"} />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
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
          <Stack.Protected guard={isAuthenticated}>
            <Stack.Screen
              name="(protected)/(tabs)"
              options={{
                headerShown: false,
                headerTintColor: "#deddd1ff",
                headerTitleStyle: { color: "#deddd1ff" },
                headerStyle: { backgroundColor: "#2D2E2F" },
              }}
            />
          </Stack.Protected>
        </Stack>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
