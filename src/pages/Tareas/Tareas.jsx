import { Stack } from "@mui/material";
import EditTask from "./components/EditTask";
import { useDispatch } from "react-redux";
import EventSelector from "./components/EventSelector";
import TaskList from "./components/TaskList";

const Tareas = () => {
  const dispatch = useDispatch();

  return (
    <Stack direction={{ xs: "column", md: "row" }} p={1} height={"100vh"}>
      <Stack direction={"column"} flexBasis={"40%"}>
        <EventSelector dispatch={dispatch} />
        <TaskList />
      </Stack>
      <EditTask />
    </Stack>
  );
};

export default Tareas;
