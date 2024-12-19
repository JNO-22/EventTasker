// useLogin.js
import useAxios from "axios-hooks";

const useLogin = () => {
  const [{ data, loading, error }, execute] = useAxios(
    {
      url: "http://localhost:3000/user",
    },
    {
      manual: true,
    }
  );

  const handleLogin = async (params) => {
    try {
      const response = await execute(params);
      sessionStorage.setItem("user", JSON.stringify(response.data));
      sessionStorage.setItem("isAuthenticated", "true");
      window.location.href = "/";
    } catch (err) {
      console.log(err.response);
    }
  };

  return {
    handleLogin,
    loading,
    error,
    msg: error?.response?.data?.mensaje,
    data,
  };
};

export default useLogin;
