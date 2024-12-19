import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { StyledButtons } from "@theme/Style/StyledButtons";

const LoginForm = ({ execute }) => {
  const [formData, setFormData] = useState({ correo: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    execute({
      method: "get",
      params: formData,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={submitForm}
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#7065ff",
        color: "white",
        padding: "4em",
        justifyContent: "center",
      }}
    >
      <Typography fontWeight={"bold"} variant="h4">
        Inicia Sesión
      </Typography>

      <Typography variant="h6" fontWeight={"light"} gutterBottom>
        Y empieza a planificar tus eventos
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        color="White"
        name="correo"
        onChange={handleInputChange}
        type="email"
        fullWidth
        required
        slotProps={{
          inputLabel: { style: { color: "white" } },
          input: { style: { color: "white" } },
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        color="White"
        name="password"
        onChange={handleInputChange}
        fullWidth
        type="password"
        required
        slotProps={{
          inputLabel: { style: { color: "white" } },
          input: { style: { color: "white" } },
        }}
      />
      <StyledButtons
        type="submit"
        variant="outlined"
        sx={{ color: "white", borderColor: "white" }}
      >
        Login
      </StyledButtons>
    </Box>
  );
};

export default LoginForm;
