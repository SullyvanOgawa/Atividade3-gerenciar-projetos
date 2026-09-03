import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Categoria from '../Pages/Categoria';
import Projeto from '../Pages/Projeto';

export function AppRoutes({
  categorias,
  cadastrarCategoria,
  editarCategoria,
  excluirCategoria,
  projetos,
  cadastrarProjeto,
  editarProjeto,
  excluirProjeto
}) {

  const [menuAtivo, setMenuAtivo] = useState('projetos');

  return (

    <BrowserRouter>

      <div className="container py-4">

        <div className="mb-4 d-flex justify-content-between align-items-start flex-wrap gap-3">

          <div>

            <h1
              style={{
                fontFamily: "Bebas Neue",
                color: "#2B6BCF",
                letterSpacing: "2px",
                fontSize: "3rem"
              }}
            >
              GESTÃO DE PROJETOS
            </h1>

            <p className="text-muted mb-0">
              Cadastro e gerenciamento de projetos e categorias.
            </p>

          </div>

          <nav className="project-menu" aria-label="Menu principal">

            <button
              type="button"
              className={`project-menu-item ${menuAtivo === 'projetos' ? 'active' : ''}`}
              onClick={() => setMenuAtivo('projetos')}
            >
              Projetos
            </button>

            <button
              type="button"
              className={`project-menu-item ${menuAtivo === 'categorias' ? 'active' : ''}`}
              onClick={() => setMenuAtivo('categorias')}
            >
              Categorias
            </button>

          </nav>

        </div>

        {menuAtivo === 'projetos' ? (

          <Projeto
            projetos={projetos}
            categorias={categorias}
            cadastrarProjeto={cadastrarProjeto}
            editarProjeto={editarProjeto}
            excluirProjeto={excluirProjeto}
          />

        ) : (

          <Categoria
            categorias={categorias}
            cadastrarCategoria={cadastrarCategoria}
            editarCategoria={editarCategoria}
            excluirCategoria={excluirCategoria}
          />

        )}

      </div>

    </BrowserRouter>

  );

}
