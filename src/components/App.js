import "../styles/App.scss";
import "../styles/Reset.scss";

const App = () => {
  return (
    <div>
      <header>
        <nav className="nav row">
          <div className="titlebackground col">
            <h1 className="nameartist">
              <a href="#">Gloria Gómez-Calcerrada</a>
            </h1>
          </div>
          <div className="col">
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
          &copy; 2022 Gloria Gómez-Calcerrada Pintora. Todos los derechos
          reservados
        </span>
      </footer>
    </div>
  );
};

export default App;
