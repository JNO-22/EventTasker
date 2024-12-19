import { Button, styled } from "@mui/material";

export const StyledButtons = styled(Button)(({ theme }) => ({
  variants: [
    {
      props: { variant: "open-sidebar" },
      style: {
        zIndex: "1000",
        position: "fixed",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0 10em 10em 0em",
        padding: "1em",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease-in",
        top: "1em",
        left: "0",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
        "&:focus, &:active": {
          padding: "1em 2em",
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  ],
}));
