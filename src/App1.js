import "./App.css";
import { Navigation } from "./Navigation.js";
import Hero from "./Hero.js";

import { Aboutus } from "./Aboutus.js";
import Research from "./Research.js";
import Knowmore from "./Knowmore";
import ParentComponent from './Publications.js'

function App() {
  return (
    <div className="App">
      <Navigation />
      <ParentComponent />
    </div>
  );
}

export default App;
