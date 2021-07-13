import { BrowserRouter as Router, Switch } from "react-router-dom";

import AppRoute from "../router/AppRoute";
import Routes from "./routes";
function AppRouter() {
  // const { isAuthenticated } = useSelector((state) => state.auth.data);
  return (
    <Router>
      <Switch>
        {Routes.map((route) => {
          // if (route.path === pathRoutes.login && isAuthenticated) {
          //   return <Redirect to={pathRoutes.home} />;
          // }

          return <AppRoute key={route.path} {...route} />;
        })}
      </Switch>
    </Router>
  );
}

export default AppRouter;
