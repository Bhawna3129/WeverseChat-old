import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import messageData from "../mocks/data/message";
import ChatMessageItem from "../components/ChatMessageItem";
import Colors from "../constants/Colors";
const chalk = require("chalk");

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log(route);
  return (
    <View style={styles.container}>
      <FlatList
        data={messageData.messages}
        renderItem={({ item }) => <ChatMessageItem message={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.header,
  },
});
export default ChatRoomScreen;
