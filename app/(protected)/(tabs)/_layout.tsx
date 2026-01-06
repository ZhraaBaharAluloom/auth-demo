import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FE8723",
        tabBarInactiveTintColor: "#deddd1ff",
        tabBarStyle: {
          backgroundColor: "#2D2E2F",
          borderTopWidth: 0,
          paddingTop: 5,
        },
        headerStyle: {
          backgroundColor: "#2D2E2F",
        },
        headerTitleStyle: {
          color: "#FE8723",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Restaurants",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
