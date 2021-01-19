import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          {/* Add page components here */}
          <div>Hello</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
