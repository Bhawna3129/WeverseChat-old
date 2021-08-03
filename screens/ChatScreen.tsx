import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
