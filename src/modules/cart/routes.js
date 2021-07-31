import Cart from "./pages/Cart";
import Bill from "./pages/Bill";
import MainLayout from "../../components/layouts/main";
import paths from "../../helper/pathRoutes";

const routes = [
  {
    path: paths.cart,
    page: Cart,
    exact: true,
    layout: MainLayout,
  },
  {
    path: paths.bill,
    page: Bill,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
