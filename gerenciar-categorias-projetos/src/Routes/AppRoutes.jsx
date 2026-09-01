import { BrowserRouter, Routes, Route }
from 'react-router-dom';

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

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Categoria
              categorias={categorias}
              cadastrarCategoria={
                cadastrarCategoria
              }
              editarCategoria={
                editarCategoria
              }
              excluirCategoria={
                excluirCategoria
              }
            />
          }
        />

        <Route
          path="/projetos"
          element={
            <Projeto
              projetos={projetos}
              categorias={categorias}
              cadastrarProjeto={
                cadastrarProjeto
              }
              editarProjeto={
                editarProjeto
              }
              excluirProjeto={
                excluirProjeto
              }
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}
