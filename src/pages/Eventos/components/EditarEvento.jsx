import { Container, Typography } from "@mui/material";
import FormComponent from "@components/Forms/FormComponent";
import { useSelector } from "react-redux";

const EditarEvento = ({ execute }) => {
  const event = useSelector((state) => state.event.selected);

  function handleSubmit(data, method, params) {
    execute({
      method: method,
      data: data,
      params: params,
    });
    window.location.href = "/events";
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2em 0 0 2em",
        backgroundColor: "#fff",
        boxShadow:
          "0 5px 10px rgba(0, 0, 0, 0.2), 0 15px 40px rgba(0, 0, 0, 0.05)",
        margin: "0",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        mt={2}
        sx={{ width: "100%" }}
        textAlign={"center"}
      >
        {event.titulo ? "Editar un Evento" : "Crear un nuevo Evento"}
      </Typography>
      {<FormComponent entity="event" item={event} onSubmit={handleSubmit} />}
    </Container>
  );
};

export default EditarEvento;
