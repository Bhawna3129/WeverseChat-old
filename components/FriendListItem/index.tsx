import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const FriendListItem = (props: any) => {
  const { users } = props;
  const onPress = () => {};
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: users.imageUri }} style={styles.avatar} />
          <View style={styles.middleContainer}>
            <Text style={styles.userName}>{users.name}</Text>
            <Text style={styles.statusText}>
              {users.statusMessage ? users.statusMessage : null}
            </Text>
          </View>
        </View>

        <View
          style={
            users.currentMusic
              ? styles.rightContainer
              : styles.rightContainerNone
          }
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.currentMusic}
          >
            {users.currentMusic ? "🎵 " + users.currentMusic : null}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default FriendListItem;
