import { useTheme, useMediaQuery, Stack, Box, TextField } from "@mui/material";
import EditarEvento from "./components/EditarEvento";
import SwiperComponent from "./components/SwiperComponent";
import Loading from "@components/Loading/Loading";
import Alerta from "@components/Alert/Alerta";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useApi } from "../../Services/handleData";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Funcion para manejar las peticiones a la API
  const { data, loading, alerta, errorMsj, execute } = useApi("eventos");

  // useEffect para actualizar eventos
  useEffect(() => {
    if (data) setEvents(data);
  }, [data]);

  // Busqueda de eventos por nombre
  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  // Filtrado de eventos
  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [events, searchQuery]);

  // Estilos

  const mainBoxStyles = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    pt: "2em",
    width: "100%",
    height: { xs: "100%", sm: "100vh" },
  };

  const boxStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    px: "1em",
    flexBasis: "50%",
    maxHeight: "calc(100vh - 2em)",
  };

  const stackStyles = {
    maxWidth: "100vw",
    px: 1,
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <Stack direction={{ xs: "column", sm: "row" }} gap={2} sx={stackStyles}>
      {loading && <Loading />}
      {alerta && <Alerta severity={alerta} errorMsj={errorMsj} />}
      <Box sx={mainBoxStyles}>
        <TextField
          type="text"
          placeholder="Buscar un evento por nombre"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: "100%", maxWidth: "400px", borderRadius: "1em" }}
        />
        <Box sx={boxStyles}>
          <SwiperComponent
            data={filteredEvents}
            isSmallScreen={isSmallScreen}
          />
        </Box>
      </Box>

      <EditarEvento execute={execute} />
    </Stack>
  );
};

export default Events;
