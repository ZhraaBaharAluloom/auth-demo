import { getToken, removeToken } from "@/api/storage";
import AuthContext from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const queryClient = new QueryClient();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log("🚀 ~ RootLayout ~ isAuthenticated:", isAuthenticated);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      await removeToken();
      const token = await getToken();
      console.log("🚀 ~ checkToken ~ token:", token);
      setIsAuthenticated(token ? true : false);
      setIsReady(true);
    };

    checkToken();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"gray"} />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
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
          <Stack.Screen
            name="(protected)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
