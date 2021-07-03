import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "../../components/layouts/auth";
import paths from "../../helper/pathRoutes";

const routes = [
  {
    path: paths.login,
    page: Login,
    exact: true,
    layout: AuthLayout,
  },
  {
    path: paths.register,
    page: Register,
    exact: true,
    layout: AuthLayout,
  },
];

export default routes;
