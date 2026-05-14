import { useState } from 'react';

import { AppRoutes } from './Routes/AppRoutes';

function App() {

  const [categorias, setCategorias] = useState(() => {
    return JSON.parse(
      localStorage.getItem('categorias')
    ) || [];
  });

  function excluirCategoria(id) {

    const categoriasAtualizadas =
      categorias.filter(
        (categoria) => categoria.id !== id
      );

    setCategorias(categoriasAtualizadas);

    localStorage.setItem(
      'categorias',
      JSON.stringify(categoriasAtualizadas)
    );
  }

  return (
    <AppRoutes
      categorias={categorias}
      setCategorias={setCategorias}
      excluirCategoria={excluirCategoria}
    />
  );
}

export default App;