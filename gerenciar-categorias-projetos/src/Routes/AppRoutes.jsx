import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from '../Components/Menu/Menu';
import Home from '../Pages/Home';
import CadastroCategoria from '../Pages/CadastroCategoriaProject';
import Categorias from '../Pages/CategoriasProject';


export function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route
          path="/home"
         exact element={<Home />}
        />

        <Route
          path="/cadastro-categoria" exact
          element={<CadastroCategoria />}
        />

        <Route
          path="/categorias" exact
          element={<Categorias />}
        />

      </Routes>

    </BrowserRouter>
  );
}