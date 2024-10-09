import React, { useState } from "react";

import MainHome from "./HomePageContent/MainHome";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import OrderMain from "./OrderPizzaPage/OrderMain";
import axios from "axios";

function MainComponent() {
  const [pizzaData, setPizzaData] = useState(null);

  return (
    <div>
      <Switch>
        <Route path="/" component={MainHome} exact />
        <Route path="/order/:pizzaId" component={OrderMain} />
      </Switch>
    </div>
  );
}

export default MainComponent;
