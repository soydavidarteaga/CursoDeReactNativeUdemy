import { StyleSheet } from "react-native";

import { Metrics, AppStyles, Colors, Fonts } from "../../Theme/";

export default StyleSheet.create({
  ...AppStyles.screen,
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainBackground
  },
  title: {
    ...Fonts.family.recipeNameCard,
    fontWeight: "bold"
  },
  title: {
    fontFamily: Fonts.family.base,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: "center",
    color: Colors.black
  },
  button: {
    marginTop: Metrics.baseSpace,
    paddingHorizontal: Metrics.baseSpace,
    height: Metrics.buttonSize,
    backgroundColor: Colors.lightOrange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Metrics.buttonRadius
  },
  buttonText: {
    fontFamily: Fonts.family.bold,
    color: Colors.whiteFull,
    lineHeight: 24,
    fontSize: 18
  },
  google:{
      backgroundColor: "#D62D20"
  },
  facebook:{
      backgroundColor:"#3e5f8a"
  },
});