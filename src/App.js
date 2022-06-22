import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Cellini } from "./Cellini";
import { Datejust } from "./Datejust";
import { Daydate } from "./Daydate";
import { Gemset } from "./Gemset";
import { Goldsteel } from "./Goldsteel";
import { Goldwatches } from "./Goldwatches";
import { Ladydate } from "./Ladydate";
import { Menwatches } from "./Menwatches";
import { Navbar } from "./Navbar";
import { Oyster } from "./Oyster";
import { Rolex } from "./Rolex";
import { Skydweller } from "./Skydweller";
import { Steelwatches } from "./Steelwatches";
import { Watches } from "./Watches";
import { Womenwatches } from "./Womenwatches";
import { Worldofrolex } from "./Worldofrolex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Rolex />
        </Route>
        <Route exact path="/watches">
          <Watches />
        </Route>
        <Route exact path="/world">
          <Worldofrolex />
        </Route>
        <Route exact path="/DAY-DATE">
          <Daydate />
        </Route>
        <Route exact path="/DATE-JUST">
          <Datejust />
        </Route>
        <Route exact path="/OYSTER-PERPETUAL">
          <Oyster />
        </Route>
        <Route exact path="/LADY-DATEJUST">
          <Ladydate />
        </Route>
        <Route exact path="/SKY-DWELLER">
          <Skydweller />
        </Route>
        <Route exact path="/CELLINI">
          <Cellini />
        </Route>
        <Route exact path="/men">
          <Menwatches />
        </Route>
        <Route exact path="/women">
          <Womenwatches />
        </Route>
        <Route exact path="/gold">
          <Goldwatches />
        </Route>
        <Route exact path="/steel">
          <Steelwatches />
        </Route>
        <Route exact path="/gs">
          <Goldsteel />
        </Route>
        <Route exact path="/gem">
          <Gemset />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
