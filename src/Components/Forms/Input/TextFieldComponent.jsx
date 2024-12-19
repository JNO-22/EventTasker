import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Box,
  FormLabel,
} from "@mui/material";
import { timeFormatter } from "../../../util/TimeFormatter";
import PropTypes from "prop-types";

const TextFieldComponent = ({
  label,
  name,
  type,
  value,
  onChange,
  options,
}) => {
  return type === "checkbox" ? (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Checkbox
        name={name}
        id={name}
        label={label}
        type={type}
        checked={value || false}
        onChange={onChange}
      />
    </Box>
  ) : type !== "select" ? (
    <TextField
      name={name}
      id={name}
      label={label}
      type={type}
      value={type === "date" ? timeFormatter(value) : value || ""}
      onChange={onChange}
      required={
        name === "password" || name === "passwordConfirm" ? false : true
      }
    />
  ) : (
    <Select
      name={name}
      value={value || "i"}
      onChange={onChange}
      required
      size="small"
    >
      <MenuItem value="i" disabled>
        {label}
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

TextFieldComponent.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default TextFieldComponent;
