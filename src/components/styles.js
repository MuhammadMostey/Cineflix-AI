import { makeStyles, useTheme } from "@mui/material/styles";
import { display, height } from "@mui/system";

export const customStyles = () => {
  const theme = useTheme();
  return {
    root: {
      display: "flex",
      height: "100%",
    },
    content: { padding: "2em", flexGrow: "1" },
    toolbar: { height: "70px" },
  };
};
