import { Link } from "react-router-dom";
import logo from "../../assets/Imagem_do_WhatsApp_de_2023-05-08_à_s__13.55.34-removebg-preview.png";
import cart from "../../assets/basket.svg";

export const Header = () => {
  const token = localStorage.getItem("@TOKEN");
  return (
    <header>
      <div className="container">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          {!token ? (
            <>
              <Link to="/login">Entrar</Link>
              <Link to="/register">Cadastrar</Link>
              <img src={cart} alt="carrinho" />
            </>
          ) : (
            <>
              <button>Sair</button>
              <img src={cart} alt="carrinho" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
