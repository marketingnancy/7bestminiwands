import { Route, Switch, Redirect } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/best-mini-wand-vibrators" component={Home} />
      <Route path="/">
        <Redirect to="/best-mini-wand-vibrators" />
      </Route>
      <Route>
        <Redirect to="/best-mini-wand-vibrators" />
      </Route>
    </Switch>
  );
}

export default App;
