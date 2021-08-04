import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // marginTop: 5,
  },
  leftContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 11,
  },
  chatBubble: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 20,
    marginTop: 5,
    padding: 20,
    // marginLeft: 10,
    marginRight: 20,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  chatBubbleArrowLeft: {
    backgroundColor: "transparent",
    // borderStyle: "solid",
    // borderTopWidth: 2,
    borderRightWidth: 35,
    borderBottomWidth: 20,
    // borderLeftWidth: 1,
    // borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    borderLeftColor: "transparent",
    position: "absolute",
    transform: [{ rotate: "-35deg" }],
    width: 0,
    left: -5,
  },
  content: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
    // padding: 20,
  },
  dateCreated: {
    position: "absolute",
    right: 0,
    fontSize: 12,
    color: "grey",
    fontWeight: "600",
  },

  midContainer: {
    alignContent: "flex-end",
    justifyContent: "space-between",
  },
  rightContainer: {
    justifyContent: "flex-end",
  },
});

export default styles;
