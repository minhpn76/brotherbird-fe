import authRoutes from "../modules/auth/routes";
import homeRoutes from "../modules/home/routes";
import faqRoutes from "../modules/faq/routes";
import collectionRoutes from "../modules/collection/routes";

const routes = [
  ...homeRoutes,
  ...faqRoutes,
  ...collectionRoutes,
  ...authRoutes
];

export default routes;
