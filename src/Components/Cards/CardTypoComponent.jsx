import { Typography, Box, CardContent } from "@mui/material";
import { timeFormatter } from "../../util/TimeFormatter";
import PropTypes from "prop-types";

const CardTypoComponent = ({ item }) => {
  const eventDate = timeFormatter(item.fecha);

  return (
    <Box
      sx={{
        height: "100%",
        pointerEvents: "none",
        flexBasis: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        paddingLeft: "1em",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          noWrap
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          fontWeight={"medium"}
          align="center"
        >
          {item.titulo}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography overflow={"hidden"} color="text.secondary">
            {item.categoria}
          </Typography>
          <Typography
            noWrap
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            color="text.secondary"
            width={"50%"}
          >
            {item.lugar}
          </Typography>
        </Box>
      </CardContent>
      <Typography color="text.secondary" textAlign={"center"} fontSize={12}>
        {eventDate}
      </Typography>
    </Box>
  );
};

CardTypoComponent.propTypes = {
  item: PropTypes.object,
};

export default CardTypoComponent;
