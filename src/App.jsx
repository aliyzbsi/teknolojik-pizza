import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";

import Order from "./components/header/createOrder/Order";
import SiparisDetaylari from "./components/header/siparisDetaylari/siparisDetaylari";
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
