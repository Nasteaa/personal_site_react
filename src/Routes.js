import {Switch, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Portfolio from './Portfolio';
import About from './About';
import Work from './Work';
import Contact from './Contact';

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default Routes;