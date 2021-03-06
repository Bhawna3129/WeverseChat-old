/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View } from "react-native";
import Colors from "../constants/Colors";
import ChatRoomScreen from "../screens/ChatRoomScreen";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = (props: any) => {
  console.log(props);
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => (
          <Ionicons name="chevron-back" size={24} color="white" />
        ),

        headerShown: true,
        headerBackTitleVisible: true,
        headerBackTitleStyle: {
          color: Colors.light.header,
        },
        headerStyle: {
          backgroundColor: Colors.light.header,
          height: 90,
        },
        headerTitleStyle: {
          color: Colors.light.tabIconSelected,
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={({ route, navigation }) => ({
          title: "Root",
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params?.id,
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
              <Ionicons name="menu-outline" size={22} color="white" />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
