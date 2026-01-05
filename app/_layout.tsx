import { getToken } from "@/api/storage";
import AuthContext from "@/utils/contexts/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
export default function RootLayout() {
  const queryClient = new QueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [ready, setReady] = useState(false);
  console.log(isAuthenticated);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setIsAuthenticated(true);
    }
    setReady(true);
  };
  useEffect(() => {
    checkToken();
  }, []);
  if (!ready) {
    return <ActivityIndicator />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
        }}
      >
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
