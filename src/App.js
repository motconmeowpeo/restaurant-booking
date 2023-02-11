import { BrowserRouter, Switch } from "react-router-dom";
import { renderRouterHome } from './routes';
import HomeTemplate from './client/pages';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {renderRouterHome()}
          {/* <HomeTemplate/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
