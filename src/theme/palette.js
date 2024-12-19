import { alpha } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

export const palette = createPalette({
  primary: {
    main: "#902EF2",
    light: alpha("#902EF2", 0.5),
    dark: "#7E28D3FF",
  },
  secondary: {
    main: "#482EF2",
    light: alpha("#482EF2", 0.5),
    dark: alpha("#482EF2", 0.9),
  },
  Black: {
    main: "#342E37",
    contrastText: "#FAF9F6",
  },
  White: {
    main: "#FAF9F6",
    contrastText: "#342E37",
  },
});
