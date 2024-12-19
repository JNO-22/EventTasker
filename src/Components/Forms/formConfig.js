const formConfigs = {
  user: {
    fields: [
      { name: "nombre", label: "Nombre", type: "text" },
      { name: "correo", label: "Email", type: "email" },
      { name: "password", label: "Contrasena", type: "password" },
      {
        name: "passwordConfirm",
        label: "confirmar contrasena",
        type: "password",
      },
      { name: "telefono", label: "Telefono", type: "number" },
    ],
  },
  event: {
    fields: [
      { name: "titulo", label: "Titulo", type: "text" },
      { name: "lugar", label: "Ubicacion", type: "text" },
      { name: "fecha", label: "", type: "date" },
      {
        name: "categoria",
        label: "Selecciona la categoria",
        type: "select",
        options: ["Musica", "Deportes", "Cultura", "Otros"],
      },
    ],
  },
  task: {
    fields: [
      { name: "titulo", label: "Titulo", type: "text" },
      { name: "descripcion", label: "Descripcion", type: "textarea" },
      { name: "fechaLimite", label: "Fecha Limite", type: "date" },
      {
        name: "completada",
        label: "La tarea ha sido completada?",
        type: "checkbox",
      },
      {
        name: "prioridad",
        label: "Seleccion el nivel de prioridad",
        type: "select",
        options: ["baja", "media", "alta"],
      },
    ],
  },
};

export default formConfigs;
