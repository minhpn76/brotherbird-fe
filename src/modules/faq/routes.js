import FAQ from "./pages/FAQ";
import MainLayout from "../../components/layouts/main";
import paths from "../../helper/pathRoutes";

const routes = [
  {
    path: paths.faq,
    page: FAQ,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
