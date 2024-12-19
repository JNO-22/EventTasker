import {
  Home as HomeIcon,
  EventNote as EventNoteIcon,
  TaskAlt as TaskAltIcon,
  Person as UserIcon,
} from "@mui/icons-material";
import { Home, Events, Tareas, Usuario } from "../pages";

export const ROUTE_LINKS = [
  { label: "Home", icon: <HomeIcon />, path: "/", component: <Home /> },
  {
    label: "Eventos",
    icon: <EventNoteIcon />,
    path: "/events",
    component: <Events />,
  },
  {
    label: "Tareas",
    icon: <TaskAltIcon />,
    path: "/tasks",
    component: <Tareas />,
  },
  {
    label: "Usuario",
    icon: <UserIcon />,
    path: "/user",
    component: <Usuario />,
  },
];
