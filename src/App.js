import React, { useEffect, Suspense } from "react";
import { inject, observer } from "mobx-react";
import { Route, withRouter, Switch } from "react-router-dom";
import Character from "./Pages/Character";
import Loading from "./commons/Loading";
import NotFound from "./Pages/NotFound";
const Home = React.lazy(() => import("./Pages/Home"));

const App = ({ characterStore, history }) => {
  useEffect(() => {
    characterStore.loadCharacters();
  });
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:characterId" component={Character} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default inject("characterStore")(withRouter(observer(App)));
