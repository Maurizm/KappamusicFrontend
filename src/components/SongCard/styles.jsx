import { COLORS } from "../../colors/colors";
export const styles = {
  container: {
    textAlign: "center",
    marginTop: 20,
  },
  infoContainer: {
    paddingLeft: 10,
  },
  coverContainer: {
    height: 200,
    aspectRatio: 1,
    backgroundColor: COLORS.accentColor,
    margin: 10,
  },
  cover: {
    height: "100%",
    aspectRatio: 1,
    paddingLeft: 5,
  },
  text: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 200,
  },
};
