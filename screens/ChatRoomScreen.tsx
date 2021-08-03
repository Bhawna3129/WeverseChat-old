import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
const chalk = require("chalk");

const ChatRoomScreen = () => {
  const route = useRoute();
  // console.log(route);
  //   console.log(route.params);
  return (
    <View>
      <Text>Chat Room</Text>
    </View>
  );
};
export default ChatRoomScreen;
