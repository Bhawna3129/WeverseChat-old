import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  // console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.content}>{chatRoom.lastMessage?.content}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text>Aug 14</Text>
        <Text>1</Text>
      </View>
    </View>
  );
};

export default ChatListItem;
