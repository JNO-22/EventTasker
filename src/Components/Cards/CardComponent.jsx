import { CardActionArea } from "@mui/material";
import CardDetails from "./CardDetails";
import CardMediaComp from "./Media/CardMediaComp";
import { StyledCards } from "./StyledCards";
import PropTypes from "prop-types";
import CardTypoComponent from "./CardTypoComponent";
const CardComponent = ({
  variant,
  item,
  principal,
  clikable,
  handleSelect,
}) => {
  return (
    <StyledCards variant={variant} type={item.categoria}>
      <CardActionArea
        sx={{ height: "100%" }}
        href={item.path}
        disabled={clikable}
        onClick={() => handleSelect(item)}
      >
        <CardMediaComp variant={variant} categoria={item.categoria} />
        {variant === "home-card" ? (
          <CardDetails
            titulo={item.title}
            descripcion={item.desc}
            principal={principal}
          />
        ) : (
          <CardTypoComponent item={item} />
        )}
      </CardActionArea>
    </StyledCards>
  );
};

CardComponent.propTypes = {
  variant: PropTypes.string,
  item: PropTypes.object,
  principal: PropTypes.bool,
  itemImg: PropTypes.object,
  clikable: PropTypes.bool,
  handleSelect: PropTypes.func,
};

export default CardComponent;
