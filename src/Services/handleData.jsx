import useAxios from "axios-hooks";

// Obtener el ID del usuario del local storage
const getUserId = () => JSON.parse(sessionStorage.getItem("user"))?.id;

// Funcion para manejar las peticiones a la API
const useApi = (entity, method = "GET") => {
  const userId = getUserId();
  const [{ data, loading, error }, execute] = useAxios(
    {
      url: `http://localhost:3000/${entity}/:id`,
      params: { id: userId },
      method,
    },
    { manual: entity == "tareas" || method == "POST" }
  );

  const alerta = error ? "error" : data?.mensaje ? "success" : "warning";
  const alertaMsj = error?.response?.data?.mensaje || data?.mensaje;

  return { data, loading, alerta, execute, errorMsj: alertaMsj };
};

export { useApi };
