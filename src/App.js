import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import BackToTop from "./components/BackToTop";

function App() {
  const location = useLocation();

  const dmState = localStorage.getItem("darkMode")
    ? JSON.parse(localStorage.getItem("darkMode"))
    : [true];

  const [darkMode, setDarkMode] = useState(dmState);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    return () => {};
  }, [darkMode]);

  const toggleDM = () => {
    setDarkMode(!darkMode);
  };

  const homeState = localStorage.getItem("isHome")
    ? JSON.parse(localStorage.getItem("isHome"))
    : [true];

  const [isHome, setIsHome] = useState(homeState);
  useEffect(() => {
    localStorage.setItem("isHome", JSON.stringify(isHome));
    return () => {};
  }, [isHome]);

  const setHome = (bool) => {
    setIsHome(bool);
    return isHome;
  };

  return (
    <>
      <Header
        toggleDM={toggleDM}
        darkMode={darkMode}
        home={setHome}
        isHome={isHome}
      />
      <Sidebar home={setHome} isHome={isHome} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home darkMode={darkMode} home={setHome} />
          </Route>
          <Route path="/my-work/">
            <Experience darkMode={darkMode} />
          </Route>
          <Route path="/contact/">
            <Contact darkMode={darkMode} />
          </Route>
        </Switch>
      </AnimatePresence>
      <BackToTop />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
