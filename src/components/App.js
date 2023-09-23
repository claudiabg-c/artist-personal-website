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
        <nav
          className={`titlebackground nav row-no-gutters col${
            burger ? "-12" : "-6"
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
              <h3><a href="#biography">Sobre la artista</a></h3>
              <h3><a href="#exhibits">Exposiciones</a></h3>
              <h3><a href="#">Galería</a></h3>
              <h3><a href="#">Otros trabajos</a></h3>
              <h3><a href="#">Contacto</a></h3>
              <h3><a href="#">Carro</a></h3>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section id="biography">
          <h1>Biografía</h1>
          <p>Culpa minim aliqua mollit sit aute incididunt in deserunt elit consequat quis pariatur. In pariatur consequat aliquip adipisicing sunt. Nisi occaecat adipisicing Lorem qui. Id eiusmod adipisicing qui ut amet qui est esse pariatur magna esse cillum.</p>
          <p>Eu cupidatat ullamco velit non consequat exercitation qui aliqua fugiat aute. Excepteur deserunt do in laboris officia velit proident ut. Consectetur aliqua et excepteur ea ullamco non eu. Nostrud ex aliqua irure tempor ullamco fugiat excepteur aliqua occaecat anim excepteur nostrud nostrud pariatur.</p>
          <p>Anim culpa adipisicing quis tempor. Eiusmod deserunt anim sunt duis ad laboris eiusmod incididunt. Nostrud ullamco minim ad tempor minim commodo ipsum eu qui duis do.</p>
          <p>Veniam tempor deserunt pariatur mollit excepteur aute. Ex Lorem velit quis nostrud ad nulla irure adipisicing ut ea proident occaecat ad esse. Est eu elit esse excepteur minim est qui aute est tempor ea aliqua et do. Sunt ea magna aliquip eiusmod excepteur duis veniam ullamco. Pariatur veniam nulla excepteur mollit eiusmod voluptate enim ea. Ad labore culpa ullamco enim pariatur. Est ad elit cupidatat et excepteur aliquip sit qui.</p>
          <p>Voluptate magna eu esse in cillum laborum do elit aliqua. Aliqua ex culpa occaecat ut id ullamco minim fugiat qui nulla. Irure labore eu veniam anim eiusmod veniam laborum dolor velit nostrud ullamco ea labore. Cupidatat commodo deserunt veniam eu consectetur deserunt eiusmod labore excepteur. Lorem proident sunt do deserunt aliquip. Adipisicing nulla eu exercitation commodo ad id quis officia Lorem voluptate laboris sunt est aute.</p>
        </section>
        <section id="exhibits">
          <h1>Exposiciones</h1>
          <p><span className="year">2018</span> - Ullamco culpa quis labore est.</p>
          <p><span className="year">2017</span> - Cillum sit ut pariatur aute magna excepteur labore nostrud elit.</p>
          <p><span className="year">2015</span> - Consectetur deserunt aliqua ipsum esse sunt culpa eu ullamco.</p>
          <p><span className="year">2010</span> - Tempor mollit ipsum Lorem ipsum incididunt ea occaecat est.</p>
        </section>
      </main>
      <footer>
        <span>
          &copy; 2022 Gloria Gómez-Calcerrada. Todos los derechos reservados
        </span>
      </footer>
    </div>
  );
};

export default App;
