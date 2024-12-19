import { Route, Routes } from "react-router";
import NavBar from "../pages/navbar/NavBar";
import { default as Login } from "../pages/AuthenticationPage/AuthenticationPage";
import { ROUTE_LINKS } from "./RouteConfig";
import ProtectedRoute from "./protectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<NavBar />}>
        {ROUTE_LINKS.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute>{route.component}</ProtectedRoute>}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
