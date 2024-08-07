import React, { useState } from "react";
import { Route, Switch, Link, useHistory, useLocation } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Biography from "./Biography";
import Contact from "./Contact";
import "../styles/App.scss";
import "../styles/Reset.scss";

const App = () => {
  const [burger, setBurger] = useState(true);
  const [dNone, setDNone] = useState(true);

  const history = useHistory();
  const location = useLocation();

  function toggleBurgerClass() {
    setBurger(!burger);
    setDNone(!dNone);
  }

  return (
    <div className="app">
      {location.pathname !== "/" && (
        <header>
          <nav className={`titlebackground nav row-no-gutters col-${burger ? "12" : "6"}`}>
            <h1 className="nameartist">
              <Link to="/">
                Gloria Gómez-Calcerrada
              </Link>
            </h1>
            <div className="menu-container">
              <div className={`menu-toggle ${burger ? "" : "open"}`} onClick={toggleBurgerClass}>
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="cross">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={`menu ${dNone ? "d-none" : ""}`} onClick={toggleBurgerClass}>
                <Link to="/biography">
                  <h3>Sobre la artista</h3>
                </Link>
                <Link to="/gallery">
                  <h3>Galería</h3>
                </Link>
                <Link to="/contact">
                  <h3>Contacto</h3>
                </Link>
              </div>
            </div>
          </nav>
        </header>
      )}
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/biography" component={Biography} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <footer>
        <span>
          &copy; {new Date().getFullYear()} Gloria Gómez-Calcerrada. Todos los derechos reservados
        </span>
      </footer>
    </div>
  );
};

export default App;
