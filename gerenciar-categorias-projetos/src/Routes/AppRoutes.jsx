import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Menu from '../Components/Menu/Menu';
import Home from '../Pages/Home';
import CadastroCategoriaProject from '../Pages/CadastroCategoriaProject';
import CategoriasProject from '../Pages/CategoriasProject';

export function AppRoutes({categorias, cadastrarCategoria, editarCategoria, excluirCategoria}) {

  return (

    <BrowserRouter>

      <Menu />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              categorias={categorias}
            />
          }
        />

        <Route
          path="/cadastro-categoria"
          element={
            <CadastroCategoriaProject
              cadastrarCategoria={
                cadastrarCategoria
              }
            />
          }
        />

        <Route
          path="/categorias"
          element={
            <CategoriasProject
              categorias={categorias}
              excluirCategoria={
                excluirCategoria
              }
              editarCategoria={
                editarCategoria
              }
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}