import { List } from "@mui/material";
import { useApi } from "../../../Services/handleData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListTarea from "./ListTarea";

const TaskList = () => {
  const selectedEvent = useSelector((state) => state.event.selected);
  const { execute, data } = useApi("tareas");
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    if (!selectedEvent.id) return;
    execute({ params: { id: selectedEvent.id } });
    return () => {};
  }, [selectedEvent, execute]);

  useEffect(() => {
    if (data && data.length > 0) {
      setTareas(data);
    } else {
      setTareas([]);
    }
    return () => {};
  }, [data]);

  return (
    <List
      component={"ul"}
      sx={{ width: "100%", maxHeight: { xs: 300, md: 500 }, overflow: "auto" }}
    >
      {tareas.length === 0 ? (
        <p style={{ textAlign: "center" }}>No hay tareas para mostrar</p>
      ) : (
        tareas.map((tarea, index) => <ListTarea key={index} tarea={tarea} />)
      )}
    </List>
  );
};

export default TaskList;
