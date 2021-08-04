import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
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
  middleContainer: {
    // alignContent: "flex-end",
    justifyContent: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 13,
  },
  rightContainer: {
    textAlign: "center",
    // marginTop: 15,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: 20,
    // position: "absolute",
    // right: 0,
  },

  rightContainerNone: {
    // textAlign: "center",
    // marginTop: 15,
    // width: "100%",
  },
  statusText: {
    fontSize: 12,
    color: "#b3b3b3",
    fontWeight: "600",
    marginTop: 3,
  },
  currentMusic: {
    // borderWidth: 1,
    fontSize: 11,
    // marginTop:0,
    // textOver
  },
});

export default styles;
