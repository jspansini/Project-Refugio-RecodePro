import { Link } from "react-router-dom";
import logo from "../midia/logo.png";

const Header = () => {
  const login = <Link to={"/login"}>LOGIN</Link>;

  const perf = <Link to={"/perfil"}>PERFIL</Link>;

  var btn;

  const userStorage = localStorage.getItem("user");

  if (userStorage === null) {
    btn = login;
  } else {
    btn = perf;
  }

  return (
    <div>
      <header>
        <nav className="navs navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand img imglogo">
              <img src={logo} height="40px" alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="menus navbar-nav">
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link to={"#"}>DÁDIVAS</Link>
                  <ul className="logins">
                    <li>
                      <Link to={"/anjos"} className="disabled">
                        Anjos
                      </Link>
                    </li>
                    <li>
                      <Link to={"/ongs"} className="disabled">
                        Ongs
                      </Link>
                    </li>
                    <li>
                      <Link to={"/avaliacao"} className="disabled">
                        Avaliações
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/sobre"}>SOBRE</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ marginRight: "10px" }}
          >
            <ul className="menus logins navbar-nav">
              <li>{btn}</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
