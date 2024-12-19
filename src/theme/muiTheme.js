import { createTheme, responsiveFontSizes } from "@mui/material";
import { palette } from "./palette";

const muiTheme = createTheme({
  palette: palette,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});

export default responsiveFontSizes(muiTheme);
