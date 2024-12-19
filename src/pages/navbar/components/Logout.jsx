import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { StyledListItemButton } from "@theme/Style/StyledLists";

const Logout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <ListItem disablePadding>
      <StyledListItemButton onClick={onLogout}>
        <ListItemIcon sx={{ color: "white", justifyContent: "center" }}>
          {<LogoutIcon />}
        </ListItemIcon>
        <ListItemText primary={"Logout"} />
      </StyledListItemButton>
    </ListItem>
  );
};

export default Logout;
