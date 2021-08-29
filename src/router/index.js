import { isEmpty } from "lodash";
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import AppRoute from "../router/AppRoute";
import Routes from "./routes";
import pathRoutes from '../helper/pathRoutes'

function AppRouter() {
  const cart = useSelector((state) => state.collection.cart || []);
  return (
    <Router>
      <Switch>
        {Routes.map((route) => {
          if (route.path === pathRoutes.bill && isEmpty(cart)) {
            return <Redirect to={pathRoutes.cart} />;
          }

          return <AppRoute key={route.path} {...route} />;
        })}
      </Switch>
    </Router>
  );
}

export default AppRouter;
