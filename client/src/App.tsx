import { Route, Switch, Redirect } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/best-mini-wands-2026" component={Home} />
      <Route path="/">
        <Redirect to="/best-mini-wands-2026" />
      </Route>
      <Route>
        <Redirect to="/best-mini-wands-2026" />
      </Route>
    </Switch>
  );
}

export default App;
