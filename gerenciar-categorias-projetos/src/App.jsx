import { useState } from 'react';

import { AppRoutes } from './Routes/AppRoutes';

function App() {

  const [categorias, setCategorias] = useState(() => {
    return JSON.parse(
      localStorage.getItem('categorias')
    ) || [];
  });

  return (
    <AppRoutes
      categorias={categorias}
      setCategorias={setCategorias}
    />
  );
}

export default App;