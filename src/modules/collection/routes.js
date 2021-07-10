import Collections from "./pages/Collections";
import CollectionItem from "./pages/CollectionItem";
import MainLayout from "../../components/layouts/main";
import paths from "../../helper/pathRoutes";

const routes = [
  {
    path: `${paths.collection}/${paths.product}/:item`,
    page: Collections,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
