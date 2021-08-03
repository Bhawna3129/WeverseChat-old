import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";
const moment = require("moment");
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
        <Text style={styles.dateCreated}>
          {moment(chatRoom.lastMessage.createdAt).format("MMM D")}
        </Text>
        <View style={styles.messageNumberContainer}>
          <Text style={styles.messageNumber}>1</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatListItem;
