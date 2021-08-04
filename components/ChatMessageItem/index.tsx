import React from "react";
import { Text, View, Image } from "react-native";
import { Message, User } from "../../types";
import moment from "moment";
import styles from "./styles";
export type ChatMessageProps = {
  message: any;
  users: any;
  user: User;
};

const ChatMessageItem = (props: ChatMessageProps) => {
  const { message, users } = props;
  //   console.log("11111", props);
  //   console.log(message.user.imageUri);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: message.user.imageUri }}
            style={styles.avatar}
          />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{message.user.name}</Text>
            <View style={styles.chatBubble}>
              <View style={styles.chatBubbleArrowLeft} />
              <Text style={styles.content}>{message.content}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.dateCreated}>
            {moment(message.createdAt).format("h:mm")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatMessageItem;
