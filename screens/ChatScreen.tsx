import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";
import chatRooms from "../mocks/data/chat";

const ChatScreen = () => {
  // console.log(props);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        data={chatRooms}
        keyExtractor={(item) => item.id}
      />
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
