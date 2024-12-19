import { CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CardDetails = ({ titulo, descripcion, principal }) => {
  return (
    <CardContent
      sx={{
        position: "relative",
        top: principal ? "30%" : "60%",
        pointerEvents: "none",
        background:
          "linear-gradient( hsla(0, 0%, 0%, 0.0), hsla(0, 0%, 0%, 0.3),hsla(0, 0%, 0%, 0.4),hsla(0, 0%, 0%, 0.3), hsla(0, 0%, 0%, 0.0))",
        backdropFilter: "blur(1px)",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={"bold"}
        textOverflow={"ellipsis"}
        noWrap
        overflow={"hidden"}
        gutterBottom
      >
        {titulo}
      </Typography>
      {descripcion && (
        <Typography
          variant="body2"
          color="#ffffffdd"
          gutterBottom
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {descripcion}
        </Typography>
      )}
    </CardContent>
  );
};

CardDetails.propTypes = {
  titulo: PropTypes.string,
  descripcion: PropTypes.string,
  principal: PropTypes.bool,
};

export default CardDetails;
