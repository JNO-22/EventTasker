import { Alert, Box } from "@mui/material";
import { useEffect, useState } from "react";

const Alerta = ({ errorMsj, severity }) => {
  const [mensaje, setMensaje] = useState("");
  const [autoHide, setAutoHide] = useState(true);

  useEffect(() => {
    if (!errorMsj) {
      // If there's no error message, set a default message
      setMensaje("");
    } else {
      setMensaje(errorMsj);
    }

    if (errorMsj) {
      setTimeout(() => {
        setAutoHide(false);
        setMensaje("");
      }, 5000);
    }
    return () => {
      setAutoHide(true);
      clearTimeout();
    };
  }, [errorMsj]); // Dependency on errorMsj to trigger effect when it changes

  if (!errorMsj) return null;

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        position: "absolute",
        top: 0,
        left: { xs: 0, md: "25%" },
        transform: autoHide ? "translateY(0%)" : "translateY(-100%)",
        zIndex: "1000",
        transition: "all 0.3s",
      }}
    >
      <Alert severity={severity}>{mensaje}</Alert>
    </Box>
  );
};

export default Alerta;
