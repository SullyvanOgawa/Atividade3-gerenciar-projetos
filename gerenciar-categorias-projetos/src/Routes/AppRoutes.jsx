import { BrowserRouter, Routes, Route }
from 'react-router-dom';

import Categoria from '../Pages/Categoria';

export function AppRoutes({
  categorias,
  cadastrarCategoria,
  editarCategoria,
  excluirCategoria
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

      </Routes>

    </BrowserRouter>

  );

}