import Home from "./pages/Home";
import MainLayout from "../../components/layouts/main";
import paths from "../../helper/pathRoutes";

const routes = [
  {
    path: paths.home,
    page: Home,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
