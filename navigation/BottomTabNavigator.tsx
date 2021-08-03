/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
import { View } from "react-native";
import { fontMedium, fontSmall } from "../constants/Typography";

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
          tabBarActiveTintColor: Colors.light.bottomTabIconSelected,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={24}
              color={Colors.light.bottomTabIconSelected}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={TabTwoNavigator}
        options={{
          tabBarActiveTintColor: Colors.light.bottomTabIconSelected,

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={24}
              color={Colors.light.bottomTabIconSelected}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={TabThreeNavigator}
        options={{
          tabBarActiveTintColor: Colors.light.bottomTabIconSelected,

          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome
                name="search"
                size={24}
                color={Colors.light.bottomTabIconSelected}
              />
            ) : (
              <AntDesign
                name="search1"
                size={24}
                color={Colors.light.bottomTabIconSelected}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabFourNavigator}
        options={{
          tabBarActiveTintColor: Colors.light.bottomTabIconSelected,

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? "ellipsis-horizontal-sharp"
                  : "ellipsis-horizontal-outline"
              }
              size={24}
              color={Colors.light.bottomTabIconSelected}
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
          headerTintColor: Colors.light.headerText,
          headerTitleStyle: {
            fontSize: fontMedium,
            fontWeight: "700",
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 90,
                marginRight: 10,
              }}
            >
              <AntDesign name="search1" size={22} color="white" />
              <AntDesign name="adduser" size={22} color="white" />
              <Ionicons name="settings-outline" size={22} color="white" />
            </View>
          ),
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
            fontSize: fontMedium,
            fontWeight: "700",
          },
          headerTintColor: Colors.light.headerText,

          headerStyle: { backgroundColor: Colors.light.header },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 90,
                marginRight: 10,
              }}
            >
              <AntDesign name="search1" size={22} color="white" />
              <MaterialCommunityIcons
                name="chat-plus-outline"
                size={22}
                color="white"
              />
              <Ionicons name="settings-outline" size={22} color="white" />
            </View>
          ),
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
            fontSize: fontMedium,
            fontWeight: "700",
          },
          headerTintColor: Colors.light.headerText,

          headerStyle: { backgroundColor: Colors.light.header },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 60,
                marginRight: 10,
              }}
            >
              <AntDesign name="search1" size={22} color="white" />
              <Ionicons name="settings-outline" size={22} color="white" />
            </View>
          ),
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
            fontSize: fontMedium,
            fontWeight: "700",
          },
          headerTintColor: Colors.light.headerText,

          headerStyle: { backgroundColor: Colors.light.header },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 60,
                marginRight: 10,
              }}
            >
              <AntDesign name="search1" size={22} color="white" />
              <Ionicons name="settings-outline" size={22} color="white" />
            </View>
          ),
        }}
      />
    </TabFourStack.Navigator>
  );
};

export default BottomTabNavigator;
