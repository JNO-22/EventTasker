import { Box, Button, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextFieldComponent from "./Input/TextFieldComponent";
import formConfigs from "./formConfig";
import PropTypes from "prop-types";
import {
  handleFormSubmit,
  handleInputChange,
  clearForm,
} from "./utils/FormActions";

const FormComponent = ({ entity, item, onSubmit }) => {
  const dispatch = useDispatch();
  const [requestMethod, setRequestMethod] = useState("POST");
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (item?.id) {
      setFormData(item);
      setRequestMethod("PUT");
    }
  }, [item]);

  return (
    <form
      onSubmit={(e) =>
        handleFormSubmit(e, requestMethod, onSubmit, entity, item, formData)
      }
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          pt: 2,
        }}
      >
        {formConfigs[entity].fields.map((field) => (
          <TextFieldComponent
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            value={formData[field.name]}
            options={field.options || null}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button
            type="button"
            variant="outlined"
            color="error"
            onClick={() =>
              clearForm(
                true,
                setFormData,
                setRequestMethod,
                onSubmit,
                formData,
                dispatch,
                item
              )
            }
            sx={{
              display: requestMethod !== "PUT" ? "none" : "block",
              mr: "auto",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {entity === "user" ? "Eliminar Cuenta" : "Eliminar"}
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            {requestMethod === "PUT" ? "Actualizar" : "Crear"}
          </Button>
          <Button
            type="button"
            variant="contained"
            color="warning"
            onClick={() =>
              clearForm(
                false,
                setFormData,
                setRequestMethod,
                onSubmit,
                formData,
                dispatch,
                item
              )
            }
            sx={{
              display:
                requestMethod !== "PUT" || entity === "user" ? "none" : "block",
            }}
          >
            Limpiar
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

FormComponent.propTypes = {
  entity: PropTypes.string.isRequired,
  item: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
