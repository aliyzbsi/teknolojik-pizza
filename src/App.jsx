import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Iteration-2/Main";

function App() {
  return (
    <div className="m-0 p-0 h-screen ">
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </div>
  );
}

export default App;
