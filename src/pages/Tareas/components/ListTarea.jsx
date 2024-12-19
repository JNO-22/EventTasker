import { ListItemButton, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
const ListTarea = ({ tarea }) => {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch({ type: "task/selectTask", payload: tarea });
  };

  return (
    <ListItemButton onClick={handleSelect}>
      <ListItemText primary={tarea.titulo} secondary={tarea.descripcion} />
    </ListItemButton>
  );
};

ListTarea.propTypes = {
  tarea: PropTypes.object,
};

export default ListTarea;
