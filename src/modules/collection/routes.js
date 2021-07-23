import Collections from "./pages/Collections";
import CollectionItem from "./pages/CollectionItem";
import MainLayout from "../../components/layouts/main";
import paths from "../../helper/pathRoutes";

const routes = [
  {
    path: `${paths.collection}/:item`,
    page: Collections,
    exact: true,
    layout: MainLayout,
  },
  {
    path: `${paths.collection}/:shop${paths.product}/:item`,
    page: CollectionItem,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
