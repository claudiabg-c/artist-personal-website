import { useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Gallery from "./Gallery"
import Biography from "./Biography"
import Contact from "./Contact"
import "../styles/App.scss";
import "../styles/Reset.scss";

const App = () => {
  const [burger, setBurger] = useState("false");
  const [dNone, setDNone] = useState("true");

  const history = useHistory();

  function toggleBurgerClass() {
    setBurger(!burger);
    setDNone(!dNone);
  }

  function scrollToSection(sectionId) {
    history.push('/');
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <header>
        <nav
          className={`titlebackground nav row-no-gutters col${burger ? "-12" : "-6"
            }`}
        >
          <h1 className="nameartist">
            Gloria Gómez-Calcerrada
          </h1>
          <div className="menu-container">
            <div
              className={`menu-toggle ${burger ? "" : "open"}`}
              onClick={toggleBurgerClass}
            >
              <div className="hamburger" onClick={toggleBurgerClass}>
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
              <h3 onClick={() => scrollToSection("biography")}>Sobre la artista</h3>
              <h3 onClick={() => scrollToSection("exhibits")}>Exposiciones</h3>
              <Link to="/gallery">
                <h3>Galería</h3>
              </Link>
              <h3><a href="#other-jobs">Otros trabajos</a></h3>
              <Link to="/contact">
                <h3>Contacto</h3>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Biography} />
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
