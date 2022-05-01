import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  icon: {
    transform: "rotate(90deg)",
    color: "white",
    cursor: "pointer",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  navleft: {
    display: "flex",
    alignItems: "center",
  },
  navmenu: {
    height: "100vh",
    width: "50vw",
    background: "white",
    position: "fixed",
    zIndex: 1,
    top: "0",
    left: "0",
    transition: "all 0.3s linear",
  },
  close: {
    cursor: "pointer",
  },
});
