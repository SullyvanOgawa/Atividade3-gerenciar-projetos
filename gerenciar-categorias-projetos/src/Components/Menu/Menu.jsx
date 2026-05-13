import { Link, Navbar } from 'react-router-dom';

 export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Navbar.Brand className="navbar-brand" to="/">
          Gerenciar Categorias de Projetos
        </Navbar.Brand>

        <div>
          <ul className="navbar-nav flex-row gap-3">

            <li className="nav-item">
              <Link className="nav-link" to="/home">
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
    </nav>
  );
}

