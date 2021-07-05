import authRoutes from "../modules/auth/routes";
import homeRoutes from "../modules/home/routes";
import faqRoutes from "../modules/faq/routes";

const routes = [
  ...homeRoutes,
  ...faqRoutes,
  ...authRoutes
];

export default routes;
