import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import Projects from "./components/Projects/Projects";
import Loading from "./components/Loading/Loading";
import useMediaQuery from "@mui/material/useMediaQuery";
import Welcome from "./components/Projects/Welcome/Welcome";
import Konobarco from "./components/Projects/Konobarco/Konobarco";
import SpaceTourism from "./components/Projects/SpaceTourism/SpaceTourism";
import GetInTouch from "./components/Projects/GetInTouch/GetInTouch";
import ContactMe from "./components/ContactMe/ContactMe";
import CoinSpider from "./components/Projects/CoinSpider/CoinSpider";
function App() {
  const matches = useMediaQuery("(max-width:1024px)");
  //Dva preloadera jer ima problem s gsapom
  const [preloader1, setPreloader1] = useState(true);
  const [preloader2, setPreloader2] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader1(false);
    }, 3700);
    setTimeout(() => {
      setPreloader2(false);
    }, 3800);
  }, []);

  return (
    <div>
      {preloader1 ? <Loading /> : <Home />}
      {preloader2 ? (
        ""
      ) : (
        <div>
          {matches === true ? (
            <div>
              <Welcome />
              <div style={{ backgroundColor: "brown" }}>
                <CoinSpider />
                <Konobarco />
                <SpaceTourism />
              </div>
              <GetInTouch />
              <ContactMe />
            </div>
          ) : (
            <div>
              <Projects />
              <ContactMe />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
