// Esta funcion permite manejar los cambios en los campos del formulario
export const handleInputChange = (event, setFormData) => {
  let { name, value } = event.target; // Obtener el nombre y el valor del campo
  if (name === "completada") {
    value = event.target.checked;
  }
  setFormData((prevData) => ({ ...prevData, [name]: value })); // Actualizar los datos del formulario
};

// Esta funcion permite enviar el formulario
export const handleFormSubmit = (
  event,
  requestMethod,
  onSubmit,
  entityType,
  currentItem,
  formData
) => {
  event.preventDefault();

  if (entityType === "user") {
    if (formData.password !== formData.passwordConfirm) {
      // Validar si las contraseñas coinciden
      alert("Las contraseñas no coinciden");
      return;
    }

    const methodType = requestMethod === "POST" ? "POST" : "PUT"; // Establecer el método de solicitud
    onSubmit(formData, methodType, {}); // Llamar a la función onSubmit con los datos del formulario
  } else {
    const loggedInUserId = JSON.parse(sessionStorage.getItem("user")).id;
    const currentId = currentItem.id || loggedInUserId; // Obtener el ID del evento actual
    onSubmit(formData, requestMethod, { id: currentId }); // Llamar a la función onSubmit con los datos del formulario
  }
};

// Esta funcion permite limpiar el formulario y prepararlo para una nueva solicitud de creación
export const clearForm = (
  shouldDelete,
  setFormData,
  setRequestMethod,
  onSubmit,
  formData,
  dispatch,
  entityType,
  item
) => {
  setFormData({}); // Limpiar los datos del formulario
  setRequestMethod("POST"); // Establecer el método de solicitud POST

  if (entityType === "event") {
    dispatch({ type: "event/removeEvent" }); // Limpiar el evento seleccionado
  }
  dispatch({ type: "task/removeTask" });

  if (shouldDelete) {
    onSubmit(formData, "DELETE", { id: item.id }); //De ser necesario, Se elimina de la APi
  }
};
