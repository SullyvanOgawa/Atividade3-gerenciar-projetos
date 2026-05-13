import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar'

import Home from '../Pages/Home'
import CadastroCategoria from '../Pages/CadastroCategoriaProject'
import Categorias from '../Pages/CategoriasProject'
import ProjetosCadastrados from '../Pages/ProjetosCadastrados'

export function AppRoutes() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<ProjetosCadastrados/>}/>

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/cadastro-categoria"
          element={<CadastroCategoria />}
        />

        <Route
          path="/categorias"
          element={<Categorias />}
        />

      </Routes>

    </BrowserRouter>
  )
}