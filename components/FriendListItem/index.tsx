import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./styles";

const FriendListItem = (props: any) => {
  const { users } = props;
  console.log(users);
  // console.log(users[1].imageUri);
  const onPress = () => {
    console.log("11111111111");
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: users.imageUri }} style={styles.avatar} />
          <View style={styles.middleContainer}>
            <Text style={styles.userName}>{users.name}</Text>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <Text
            style={users.currentMusic ? styles.currentMusic : styles.statusText}
          >
            {users.currentMusic ? users.currentMusic : users.statusMessage}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default FriendListItem;
