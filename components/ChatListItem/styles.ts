import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    // textAlignVertical:
  },
  leftContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 13,
  },
  content: {
    fontSize: 12,
    color: "#b3b3b3",
    fontWeight: "600",
    marginTop: 3,
  },
  dateCreated: {
    fontSize: 12,
    color: "#b3b3b3",
    fontWeight: "600",
    // marginTop: 3,
  },
  messageNumber: {
    // backgroundColor: "red",
    textAlign: "center",
    marginTop: 3,
    // width: 13,
    // height: 13,
    fontSize: 10,
    color: "white",
    borderRadius: 50,
    // alignSelf: "flex-end",
    fontWeight: "bold",
  },
  messageNumberContainer: {
    borderRadius: 50,
    backgroundColor: "red",
    width: 18,
    height: 18,
    textAlign: "center",
    // justifyContent: "flex-end",
  },

  midContainer: {
    alignContent: "flex-end",
    justifyContent: "center",
    // marginTop: 3,
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    // marginTop:
  },
});

export default styles;
