import { Box, Select, MenuItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fillEvents, selectEvent } from "../../../store/slices/eventSlice";
import { FetchData } from "../../../Services/handleData";

const EventSelector = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events) || [];
  const eventSelected = useSelector((state) => state.event.selected) || {};
  const { execute, data } = FetchData("eventos");

  // useEffect para actualizar eventos
  useEffect(() => {
    if (events.length === 0) {
      execute();
    }
    return () => {};
  }, [execute, events.length]);

  // useEffect para actualizar eventos
  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(fillEvents(data));
    }
  }, [data, dispatch]);

  function handleChange(evento) {
    const selectedEvent = events.find(
      (event) => event.id == evento.target.value
    );

    dispatch(selectEvent(selectedEvent));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: 2,
        alignItems: "center",
      }}
    >
      <Typography variant="h6" fontWeight={"bold"} mr={2}>
        {" "}
        Selecciona un evento{" "}
      </Typography>
      <Select
        id="select-event"
        value={eventSelected.id || 0}
        required
        onChange={(e) => handleChange(e)}
        sx={{ minWidth: 200 }}
      >
        <MenuItem disabled value={0}>
          Selecciona un evento
        </MenuItem>
        {events.map((event) => (
          <MenuItem key={event.id} value={event.id}>
            {event.titulo}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default EventSelector;
