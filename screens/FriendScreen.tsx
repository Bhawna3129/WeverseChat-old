import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import FriendListItem from "../components/FriendListItem";
import { Text, View } from "../components/Themed";
import users from "../mocks/data/users";

const FriendScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => <FriendListItem users={item} />}
        data={users}
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

export default FriendScreen;
