import { Container, Typography } from "@mui/material";
import FormComponent from "@components/Forms/FormComponent";
import { useSelector } from "react-redux";
import { useApi } from "../../../Services/handleData";
import Alerta from "@components/Alert/Alerta";
import Loading from "@components/Loading/Loading";

const EditTask = () => {
  const task = useSelector((state) => state.task.selected);
  const event = useSelector((state) => state.event.selected);
  const { execute, loading, alerta, errorMsj } = useApi("tareas");

  function handleSubmit(data, method, params) {
    if (method === "POST") params = { id: event.id };
    execute({
      method: method,
      data: data,
      params: params,
    });
    window.location.href = "/tasks";
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1em",
        backgroundColor: "#fff",
        boxShadow:
          "0 5px 10px rgba(0, 0, 0, 0.2), 0 15px 40px rgba(0, 0, 0, 0.05)",
        margin: "0",
        padding: "1em",
      }}
    >
      {loading && <Loading />}
      {alerta && <Alerta severity={alerta} errorMsj={errorMsj} />}
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        mt={2}
        sx={{ width: "100%" }}
        textAlign={"center"}
      >
        {task.titulo ? "Edita la tarea" : "Agrega una nueva tarea"}
      </Typography>
      {<FormComponent entity="task" item={task} onSubmit={handleSubmit} />}
    </Container>
  );
};

export default EditTask;
