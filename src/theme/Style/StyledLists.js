import { List, ListItemButton, styled } from "@mui/material";

export const StyledList = styled(List)(({ theme }) => ({
  variants: [
    {
      props: { variant: "side-bar" },
      style: {
        background:
          "linear-gradient(0deg, #902ef2, #902ef2, #902ef2, #902ef2, #8c29ee, #7623cb)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2em 0",
        alignItems: "center",
        borderRadius: "0 1em 1em 0",
        [theme.breakpoints.down("md")]: {
          padding: ".5em 0",
          borderRadius: "0em",
          justifyContent: "space-around",
        },
      },
    },
  ],
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.White.main,
  margin: "0 .5em",
  transition: "all 0.3s ease-in",
  "&:hover": {
    backgroundColor: theme.palette.White.main,
    borderRadius: "1em ",
    padding: ".5em 0",
  },
  "&:hover > *": {
    color: theme.palette.primary.main,
  },
  variants: [
    {
      props: { active: "true" },
      style: {
        backgroundColor: theme.palette.White.main,
        borderRadius: "1em 0 0 1em",
        padding: ".5em 0",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        margin: "0 0 0 1em",
        "& *": {
          color: theme.palette.primary.main,
        },
        "&:hover": {
          backgroundColor: theme.palette.White.main,
          borderRadius: "1em 0 0 1em",
        },
      },
    },
  ],
}));
