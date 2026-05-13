import { Link } from 'react-router-dom'

 export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Projetos e Categorias
        </Link>

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
  )
}

