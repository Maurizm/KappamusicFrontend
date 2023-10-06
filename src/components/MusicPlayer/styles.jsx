import { COLORS } from "../../colors/colors";

export const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: COLORS.backgroundColor,
  },
  cover: { height: 80, aspectRatio: 1, paddingLeft: 5 },
  songInformationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    //alignItems: "center",
    width: "10%",
    maxWidth: "10%",
  },
  songName: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "175px",
  },
};
