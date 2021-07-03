import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";

import AppRoute from "../router/AppRoute";
import { RootState } from "../redux/store";
import Routes from "./routes";
import pathRoutes from "../helper/pathRoutes";
import { useSelector } from "react-redux";

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
