import { COLORS } from "../../colors/colors";
export const styles = {
  container: {
    position: "relative",
    display: "flex",
    width: "60%",
    backgroundColor: COLORS.accentColor,
    alignItems: "center",
    borderRadius: 50,
  },
  searchField: {
    backgroundColor: COLORS.highlightBackgroundColor,
    padding: 10,
    borderRadius: 50,
    width: "95%",
    border: 0,
    outline: "none",
    height: "30px",
    marginRight: 5,
    marginLeft: 3,
    paddingLeft: 20,
    fontSize: 18,
  },
  searchIcon: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.accentColor,
    color: COLORS.backgroundColor,
    textAlign: "center",
    borderRadius: 50,
    paddingRight: 10,
  },
};
