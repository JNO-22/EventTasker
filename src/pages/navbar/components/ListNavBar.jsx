import Logout from "./Logout";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Link, useLocation } from "react-router";
import { Title as TitleIcon } from "@mui/icons-material";
import { Divider, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { StyledList, StyledListItemButton } from "@theme/Style/StyledLists";
import { ROUTE_LINKS as MENU_ITEMS } from "../../../routes/RouteConfig";

//TODO : Actualizar el navbar para usar el index en lugar del routeConfig.

const ListNavBar = ({ isSmallScreen }) => {
  let location = useLocation();
  return (
    <StyledList variant="side-bar">
      {!isSmallScreen && <TitleIcon sx={{ color: "white" }} />}
      {!isSmallScreen && <Divider />}
      {MENU_ITEMS.map((item, index) => (
        <Fragment key={index}>
          {item.label === "Usuario" && !isSmallScreen && <Divider />}
          <ListItem disablePadding>
            <StyledListItemButton
              active={(location.pathname === item.path).toString()}
              component={Link}
              to={item.path}
            >
              <ListItemIcon sx={{ color: "white", justifyContent: "center" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </StyledListItemButton>
          </ListItem>
          {!isSmallScreen && <Divider />}
        </Fragment>
      ))}
      <Logout />
    </StyledList>
  );
};

ListNavBar.propTypes = {
  isSmallScreen: PropTypes.bool,
};

export default ListNavBar;
