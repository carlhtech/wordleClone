import { StyleSheet, Dimensions } from "react-native";
import { keys, colors } from "../../constants";

const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;

export default StyleSheet.create({
  keyboard: {
    alignSelf: "stretch",
    marginTop: -70,
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  key: {
    width: keyWidth - 6,
    height: keyHeight - 5,
    margin: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  smallKeyText: {
    fontWeight: "bold",
    fontSize: 10,
  },
});
