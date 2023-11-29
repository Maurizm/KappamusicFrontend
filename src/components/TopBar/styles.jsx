import { COLORS } from "../../colors/colors";
export const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    ////
    position: "fixed",
    top: 0,
    width: "80%",
    zIndex: 1000,
    //backgroundColor: "black",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    alignItems: "center",
    height: 50,
    borderRadius: 20,
  },
  icon: {
    color: COLORS.accentColor,
    fontSize: 35,
    padding: 10,
  },
};
