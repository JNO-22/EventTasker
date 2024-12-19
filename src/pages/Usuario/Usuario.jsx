import { Container, Typography } from "@mui/material";
import FormComponent from "@components/Forms/FormComponent";
import Alerta from "@components/Alert/Alerta";
import Loading from "@components/Loading/Loading";
import useAxios from "axios-hooks";
const Usuario = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [{ data, loading, error }, execute] = useAxios({
    url: "http://localhost:3000/user/:id",
    params: { id: user.id },
  });

  function handleSubmit(data, method, params) {
    execute({
      method: method,
      data: data,
      params: params,
    });
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" mb={2} textAlign={"center"}>
        Edita tu cuenta
      </Typography>
      <FormComponent entity="user" item={data} onSubmit={handleSubmit} />
      {loading && <Loading />}
      {error && (
        <Alerta severity="error" errorMsj={error.response.data.mensaje} />
      )}
    </Container>
  );
};

export default Usuario;
