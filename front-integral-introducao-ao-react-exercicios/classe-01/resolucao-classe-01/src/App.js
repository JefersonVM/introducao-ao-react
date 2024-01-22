import "./App.css";
import Imagem from "./assets/gabriela.jpg";
import IconPrev from "./assets/icon-prev.svg";
import IconNext from "./assets/icon-next.svg";

function App() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p className="review-text">
            “Estive interessada em código por um tempo mas não tomava uma
            atitude, até agora. Não consigo recomendar esse curso o suficiente.
            Estou no trabalho dos meu sonhos e vejo um futuro brilhante!”
          </p>
          <div className="author__content-wrapper">
            <div className="author__name">Gabriela da Silva</div>
            <div className="author__title">Desenvolvedora Fullstack</div>
          </div>
        </div>

        <div class="carousel">
          <div class="carousel__img-wrapper">
            <img src={Imagem} alt="bootcamp graduate" class="carousel__img" />
          </div>
          <div class="carousel__btn-wrapper">
            <button id="btn-prev" class="btn btn--previous">
              <img src={IconPrev} alt="previous button" />
            </button>
            <button id="btn-next" class="btn btn--next">
              <img src={IconNext} alt="next button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
