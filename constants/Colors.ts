const tintColorLight = "#000";
const tintColorDark = "#fff";
const weverseMain = "#03E8C7";
const lightModeTextWhite = "#fff";
const darkModeTextBlack = "#000";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    header: weverseMain,
    headerText: lightModeTextWhite,
    bottomTabIconSelected: "black",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    header: weverseMain,
    headerText: darkModeTextBlack,
    bottomTabColorSelected: "white",
  },
};
