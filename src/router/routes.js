import authRoutes from "../modules/auth/routes";
import homeRoutes from "../modules/home/routes";

const routes = [
  ...homeRoutes,
  ...authRoutes
];

export default routes;
