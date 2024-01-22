import "./App.css";
import Imagem from "./assets/contatos-alienigenas.png";

function App() {
  return (
    <div className="container">
      <h1>Olá Mundo!</h1>
      <img
        src="https://i0.statig.com.br/bancodeimagens/6c/yc/a9/6cyca996dw8kykn7serpunuc1.jpg"
        alt="Foto de um alíenigina"
      />
      <img src={Imagem} alt="Foto de um alíenigina" style={{width: '400px'}} />
    </div>
  );
}

export default App;
