import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {

  return (

    <Navbar
      className="shadow-sm py-3"
      style={{
        backgroundColor: '#FFFFFF'
      }}
    >

      <div className="container">

        <Navbar.Brand
          style={{
            fontFamily: 'Bebas Neue',
            fontSize: '2rem',
            letterSpacing: '1px',
            color: '#2B6BCF'
          }}
        >
          GERENCIAMENTO DE CATEGORIAS DE PROJETOS
        </Navbar.Brand>

        <ul className="navbar-nav flex-row gap-4">

          <li className="nav-item">

            <Link
              className="nav-link fw-semibold"
              style={{
                color: '#045148'
              }}
              to="/"
            >
              Home
            </Link>

          </li>

          <li className="nav-item">

            <Link
              className="nav-link fw-semibold"
              style={{
                color: '#045148'
              }}
              to="/cadastro-categoria"
            >
              Cadastro
            </Link>

          </li>

          <li className="nav-item">

            <Link
              className="nav-link fw-semibold"
              style={{
                color: '#045148'
              }}
              to="/categorias"
            >
              Categorias
            </Link>

          </li>

        </ul>

      </div>

    </Navbar>
  );
}