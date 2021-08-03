import React from "react";
import { View, Text } from "react-native";
import { ChatRoom } from "../../types";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props) => {
  const { chatRoom } = props;
  return (
    <View>
      <Text>"asdfasdf"</Text>
    </View>
  );
};

export default ChatListItem;
