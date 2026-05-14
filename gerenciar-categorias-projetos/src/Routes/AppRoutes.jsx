import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from '../Components/Menu/Menu';

import Home from '../Pages/Home';
import CadastroCategoriaProject from '../Pages/CadastroCategoriaProject';
import CategoriasProject from '../Pages/CategoriasProject';

export function AppRoutes({
  categorias,
  setCategorias
}) {

  return (
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route
          path="/"
          element={<Home categorias={categorias}/>}
        />

        <Route
          path="/cadastro-categoria"
          element={
            <CadastroCategoriaProject
              categorias={categorias}
              setCategorias={setCategorias}
            />
          }
        />

       <Route
          path="/categorias"
          element={
            <CategoriasProject
              categorias={categorias}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}