import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="blog/index"
        options={{
          title: "Blogs",
        }}
      />
      <Tabs.Screen
        name="blog/create"
        options={{
          title: "Add Blog",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
