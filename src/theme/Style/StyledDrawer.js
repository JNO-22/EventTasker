import { Drawer, styled } from "@mui/material";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  variants: [
    {
      props: { variant: "permanent" },
      style: {
        "& .MuiDrawer-paper": {
          backgroundColor: "transparent",
          height: "100vh",
          width: "4em",
          overflow: "hidden",
          transition: "width 0.3s ease-out",
          position: "fixed",
          border: "none",
        },
        "& .MuiListItemText-root": {
          position: "absolute",
          opacity: 0,
        },
        "&:hover": {
          "& .MuiDrawer-paper": {
            width: "6em",
            color: theme.palette.White.main,
          },
          "& .MuiListItemText-root": {
            position: "static",
            opacity: 1,
          },
        },
      },
    },
    {
      props: { variant: "temporary" },
      style: {
        "& .MuiDrawer-paper": {
          backgroundColor: "transparent",
          height: "100vh",
          width: "6em",
          overflow: "auto",
          transition: "width 0.3s ease-out",
          position: "fixed",
          border: "none",
        },
      },
    },
  ],
}));
