import { Box, Typography } from "@mui/material";
import FormComponent from "@components/Forms/FormComponent";

export const Register = ({ execute }) => {
  function handleSubmit(data) {
    execute({
      method: "post",
      data: {
        ...data,
      },
    });
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        padding: "4em",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ width: "100%" }}
      >
        {" "}
        Regístrate
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        mb={2}
        fontWeight={"light"}
      >
        Para comenzar a planificar tus eventos.
      </Typography>
      <FormComponent method={"Crear"} entity="user" onSubmit={handleSubmit} />
    </Box>
  );
};
