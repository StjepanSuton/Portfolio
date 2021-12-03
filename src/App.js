import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import Projects from "./components/Projects/Projects";
import Loading from "./components/Loading/Loading";
import Madeby from "./components/Madeby/Madeby";
function App() {
  //Dva preloadera jer ima problem sa SmoothScrollom i gsapom
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
          <Projects />
        </div>
      )}
      {preloader2 ? "" : <Madeby />}
    </div>
  );
}

export default App;
