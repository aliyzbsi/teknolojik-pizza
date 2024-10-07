import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import "bootstrap/dist/css/bootstrap.min.css";
import SiparisDetaylari from "./components/Iteration-1/header/siparisDetaylari/siparisDetaylari";
import Header from "./components/Iteration-1/header/header";
import Order from "./components/Iteration-1/header/createOrder/Order";

function App() {
  return (
    <div className="m-0 p-0 h-screen ">
      <Switch>
        <Route path="/" component={Header} exact />
        <Route path="/order/:id" component={Order} />
        <Route path="/siparis-detaylari" component={SiparisDetaylari} />
      </Switch>
    </div>
  );
}

export default App;
