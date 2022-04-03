import { useState } from "react";
import "../styles/App.scss";
import "../styles/Reset.scss";

const App = () => {
  const [burger, setBurger] = useState("false");
  const [dNone, setDNone] = useState("true");

  function toggleBurgerClass() {
    setBurger(!burger);
    setDNone(!dNone);
  }

  return (
    <div>
      <header>
        <nav className="nav row-no-gutters">
          <div className={`titlebackground col${burger ? "-12" : "-6"}`}>
            <h1 className="nameartist">
              <a href="#">Gloria Gómez-Calcerrada</a>
            </h1>
          </div>
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
          <div className={`menu ${dNone ? "d-none" : ""}`}>
            <div>
              <h3>Sobre mí</h3>
              <h3>Galería</h3>
              <h3>Exposiciones</h3>
              <h3>Otros trabajos</h3>
              <h3>Contacto</h3>
              <h3>Carro</h3>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
      <footer>
        <span>
          &copy; 2022 Gloria Gómez-Calcerrada. Todos los derechos reservados
        </span>
      </footer>
    </div>
  );
};

export default App;
