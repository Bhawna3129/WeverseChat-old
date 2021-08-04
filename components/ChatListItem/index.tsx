import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const moment = require("moment");

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: any) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
      ...props,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
