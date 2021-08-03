/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabFourScreen from "../screens/TabFourScreen";
import {
  BottomTabParamList,
  TabFourParamList,
  TabOneParamList,
  TabThreeParamList,
  TabTwoParamList,
} from "../types";
import { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  const [loaded, setLoaded] = useState<any>(false);
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: {} }}
      initialRouteName="Friends"
    >
      <BottomTab.Screen
        name="Friends"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color={color} />
            ) : (
              <AntDesign name="search1" size={24} color={color} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? "ellipsis-horizontal-sharp"
                  : "ellipsis-horizontal-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

const TabOneNavigator = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: "Friends",
          headerStyle: { backgroundColor: Colors.light.header },
          headerTitleAlign: "left",
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "700",
          },
        }}
      />
    </TabOneStack.Navigator>
  );
};

const TabTwoStack = createStackNavigator<TabTwoParamList>();

const TabTwoNavigator = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerTitle: "Chat",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "700",
          },
          headerStyle: { backgroundColor: Colors.light.header },
        }}
      />
    </TabTwoStack.Navigator>
  );
};

const TabThreeStack = createStackNavigator<TabThreeParamList>();

const TabThreeNavigator = () => {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{
          headerTitle: "Explore",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "700",
          },
          headerStyle: { backgroundColor: Colors.light.header },
        }}
      />
    </TabThreeStack.Navigator>
  );
};

const TabFourStack = createStackNavigator<TabFourParamList>();

const TabFourNavigator = () => {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{
          headerTitle: "Settings",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "700",
          },
          headerStyle: { backgroundColor: Colors.light.header },
        }}
      />
    </TabFourStack.Navigator>
  );
};

export default BottomTabNavigator;
