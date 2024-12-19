import { Container, Typography } from "@mui/material";
import FormComponent from "@components/Forms/FormComponent";
import { useEffect, useState } from "react";
import Alerta from "@components/Alert/Alerta";
import Loading from "@components/Loading/Loading";
import useAxios from "axios-hooks";
const Usuario = () => {
  const userSession = JSON.parse(sessionStorage.getItem("user"));
  const [user, setUser] = useState({});

  const [{ data, loading, error }, execute] = useAxios({
    url: "http://localhost:3000/user/:id",
    params: { id: userSession?.id },
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    } else {
      setUser({});
    }
  }, [data]);

  function handleSubmit(item, method, params) {
    if (method === "PUT") params = { id: userSession.id };
    execute({
      method: method,
      data: item,
      params: params,
    });
    sessionStorage.setItem("user", JSON.stringify(item));
    window.location.href = "/";
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
      <FormComponent entity="user" item={user} onSubmit={handleSubmit} />
      {loading && <Loading />}
      {error && (
        <Alerta
          severity="error"
          errorMsj={error?.response?.data?.mensaje || "Servidor no disponible"}
        />
      )}
    </Container>
  );
};

export default Usuario;
