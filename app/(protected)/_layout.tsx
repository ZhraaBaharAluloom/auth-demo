import AuthContext from "@/contexts/AuthContext";
import { Redirect, Stack } from "expo-router";
import React, { useContext } from "react";

const ProtectedLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect href={".."} />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(protected)"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
