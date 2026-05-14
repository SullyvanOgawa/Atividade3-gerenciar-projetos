import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

 export default function Menu() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Navbar.Brand className="navbar-brand">
          Gerenciar Categorias de Projetos
        </Navbar.Brand>

        <div>
          <ul className="navbar-nav flex-row gap-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cadastro-categoria"
              >
                Cadastro
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/categorias"
              >
                Categorias
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </Navbar>
  );
}

