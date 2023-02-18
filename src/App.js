import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRouterHome } from './routes';
import HomeTemplate from './client/pages';
import Order from "./client/pages/Order";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {renderRouterHome()}
          <Route exact={true} path="/order" component={Order} />
          {/* <HomeTemplate/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;