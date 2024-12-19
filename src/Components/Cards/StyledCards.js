import { Card, CardMedia, styled } from "@mui/material";
export const StyledCards = styled(Card, {
  shouldForwardProp: (prop) => prop !== "type",
})(({ type }) => ({
  variants: [
    {
      props: { variant: "event-card" },
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "calc(80vh / 3)",
        borderRadius: "1em",
        transition: "all 0.3s ease-in",
        boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.1)",
        "& > button": {
          display: "flex",
          flexDirection: "row",
        },

        ...(type === "Cultura" && {
          backgroundColor: "#F2E5A0",
        }),
        ...(type === "Musica" && {
          backgroundColor: "#7EC5E6",
        }),
        ...(type === "Deportes" && {
          backgroundColor: "#A7D9C2",
        }),
        ...(type === "Otros" && {
          background: "#F2F2F2",
        }),
      },
    },
    {
      props: { variant: "home-card" },
      style: {
        height: "100%",
        display: "flex",
        justifyContent: "end",
        color: "white",
      },
    },
  ],
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  variants: [
    {
      props: { variant: "event-card" },
      style: {
        objectFit: "cover",
        height: "calc(80vh / 5)",
        width: "calc(80vh / 5)",
        clipPath: "circle(50% at 50% 50%)",
        transition: "all 0.3s ease-in",
        [theme.breakpoints.down("sm")]: {
          height: "calc(80vw / 3)",
          width: "calc(80vw / 3)",
        },
      },
    },
    {
      props: { variant: "home-card" },
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        filter: "grayscale(50%)",
        transition: "all 0.5s ease-in",
        "&:hover": {
          filter: "grayscale(0%)",
          transform: "scale(1.1)",
        },
      },
    },
  ],
}));
