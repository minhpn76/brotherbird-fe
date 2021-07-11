import Cart from "./pages/Cart";
import MainLayout from "../../components/layouts/main";
import paths from "../../helper/pathRoutes";

const routes = [
  {
    path: paths.cart,
    page: Cart,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
