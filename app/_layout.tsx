import Spinner from "@/components/Loading/Spinner";
import AuthContext from "@/utils/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { getItemAsync } from "expo-secure-store";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  const queryClient = new QueryClient();

  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);

  const checkToken = async () => {
    const token = await getItemAsync("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    // setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (isAuthenticated === null) return <Spinner size="large" color={"gray"} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, marginBottom: 0, backgroundColor: "#2D2E2F" }}
        edges={["top", "left", "right"]}
      >
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
          </AuthContext.Provider>
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
