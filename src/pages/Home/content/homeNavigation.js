const name = JSON.parse(sessionStorage.getItem("user")) || "";
export const homeNavigation = {
  Home: {
    categoria: "Home",
    title: "Bienvenido" + " " + name.nombre,
    desc: `Aqui podrás crear y personalizar tus eventos de manera sencilla,
     además de agregarles tareas para que todo se realice 
     sin problemas.Organiza cada detalle y mantén todo bajo control.`,
  },
  newEvent: {
    categoria: "Eventos",
    title: "Crea un nuevo evento",
    desc: `Comienza a planificar tu evento desde cero y organiza cada detalle fácilmente.`,
    path: "/events",
  },
  editEvent: {
    categoria: "Edit",
    title: "Ver y editar tus Eventos",
    desc: `Organiza tus eventos y mantén todo bajo control.`,
    path: "/tasks",
  },
  editUser: {
    categoria: "User",
    title: "Editar tu perfil",
    desc: `Personaliza tu perfil y mantén todo bajo control.`,
    path: "/user",
  },
};
