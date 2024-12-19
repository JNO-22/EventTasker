import { Stack } from "@mui/material";
import { Register } from "./components/Register";
import LoginForm from "./components/LoginForm";
import Loading from "@components/Loading/Loading";
import Alerta from "@components/Alert/Alerta";
import useLogin from "./services/useLogin";
const AuthenticationPage = () => {
  const { handleLogin, loading, error, msg } = useLogin();

  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "100vh" }}>
      {error && <Alerta severity="error" errorMsj={msg} />}
      {loading && <Loading />}
      <LoginForm execute={handleLogin} />
      <Register execute={handleLogin} />
    </Stack>
  );
};

export default AuthenticationPage;
