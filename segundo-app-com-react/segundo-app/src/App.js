import "./App.css";
import MinhaFoto from "./assets/minha-foto.png";

function App() {
  return (
    <div className="container">
      <header>
        <h1>LogoApp</h1>
        <nav>
          <ul className="menu">
            <li>Produtos</li>
            <li>Sobre nós</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="left">
          <img
            src={MinhaFoto}
            alt="Minha Foto"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundColor: "purple",
              padding: "2px",
            }}
          />
          <strong>Jeferson Vieira</strong>
          <span>
            <br />
            Eu sou Jeferson, desenvolvedor FullStack.
          </span>
        </div>
        <div className="right">
          <strong>22 de novembro 2030</strong>
          <h2>Introdução ao React</h2>
          <span>
            Nesse post iremos falar como o React é importante para o
            desenvolvedor moderno.
          </span>
          <a href="#">Ler mais...</a>
        </div>
      </main>
      <footer>
        <nav>
          <ul className="menu">
            <li>Produtos</li>
            <li>Sobre nós</li>
            <li>Contato</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
