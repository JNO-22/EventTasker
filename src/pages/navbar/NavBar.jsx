import { useState } from "react";
import { Outlet } from "react-router";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ListNavBar from "./components/ListNavBar";
import { StyledButtons } from "@theme/Style/StyledButtons";
import { StyledDrawer } from "@theme/Style/StyledDrawer";

const NavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "flex" }}>
      <StyledDrawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={open}
        onClose={isSmallScreen ? () => setOpen(false) : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <ListNavBar isSmallScreen={isSmallScreen} />
      </StyledDrawer>
      <StyledButtons
        variant="open-sidebar"
        title="Menu"
        color="secondary"
        onClick={() => setTimeout(() => setOpen(true), 300)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </StyledButtons>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#EAE8E8",
          pl: isSmallScreen ? 0 : open ? "7em" : "5em",
          transition: "all 0.3s",
          height: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default NavBar;
