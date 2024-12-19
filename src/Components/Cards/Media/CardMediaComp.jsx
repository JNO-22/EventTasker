import { StyledCardMedia } from "../StyledCards";
import { mediaConfig } from "./mediaConfig";
import PropTypes from "prop-types";
const CardMediaComp = ({ variant, categoria }) => {
  return (
    <StyledCardMedia
      component="img"
      image={mediaConfig[categoria].image}
      variant={variant}
      categoria={categoria}
    />
  );
};
CardMediaComp.propTypes = {
  variant: PropTypes.string,
  categoria: PropTypes.string,
  image: PropTypes.object,
};
export default CardMediaComp;
