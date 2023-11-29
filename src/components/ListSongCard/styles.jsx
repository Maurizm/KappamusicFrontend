import { COLORS } from "../../colors/colors";

export const styles = {
  container: {
    display: "flex",
    backgroundColor: COLORS.highlightBackgroundColor,
    width: 350,
    height: 65,
    padding: 10,
    borderBottom: "solid",
    borderColor: COLORS.accentColor,
  },
  image: {
    width: 65,
    height: 65,
  },
  description: {
    marginLeft: 10,
  },
  albumInfo: {
    fontSize: 14,
    color: "gray",
  },
};
