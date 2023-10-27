import "./App.css";
import { Navigation } from "./Navigation.js";
import Hero from "./Hero.js";

import { Aboutus } from "./Aboutus.js";
import Research from "./Research.js";
import Knowmore from "./Knowmore";

function Home() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Aboutus />
      <Research />
      <Knowmore />
    </div>
  );
}

export default Home;
