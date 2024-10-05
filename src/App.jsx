import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Order from "./components/header/createOrder/Order";
function App() {
  return (
    <div className="m-0 p-0 h-screen ">
      <Switch>
        <Route path="/" component={Header} exact />
        <Route path="/order" component={Order} />
      </Switch>
    </div>
  );
}

export default App;
