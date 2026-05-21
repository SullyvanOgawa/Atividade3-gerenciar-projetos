import { useEffect, useState } from 'react';

import { AppRoutes } from './routes/AppRoutes';

function App() {

  const [categorias, setCategorias] =
    useState([]);

  const [
    categoriaEditando,
    setCategoriaEditando
  ] = useState(null);

  async function atualizarCategorias() {

    try {

      const resposta = await fetch(
        'http://localhost:5000/categorias'
      );

      const dados = await resposta.json();

      setCategorias(dados.categorias);

    } catch (error) {

      console.error(error);

      setCategorias([]);

    }
  }

  async function cadastrarCategoria(
    novaCategoria
  ) {

    try {

      await fetch(
        'http://localhost:5000/categorias',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify(
            novaCategoria
          )
        }
      );

      await atualizarCategorias();

    } catch (error) {

      console.error(error);

    }
  }

 async function editarCategoria(categoriaAtualizada) {
  try {
    const resposta = await fetch(
      `http://localhost:5000/categorias/${categoriaAtualizada.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoriaAtualizada)
      }
    );

    const dados = await resposta.json();

    if (!resposta.ok || !dados.status) {
      console.error("Erro ao editar:", dados.mensagem);
      return;
    }

    setCategoriaEditando(null);
    await atualizarCategorias();

  } catch (error) {
    console.error("Erro de rede:", error);
  }
}

  async function excluirCategoria(id) {

    try {

      await fetch(
        `http://localhost:5000/categorias/${id}`,
        {
          method: 'DELETE'
        }
      );

      await atualizarCategorias();

    } catch (error) {

      console.error(error);

    }
  }

  useEffect(() => {

    const carregar = async () => {

      await atualizarCategorias();

    };

    carregar();

  }, []);

  return (

    <AppRoutes
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
      categoriaEditando={
        categoriaEditando
      }
      setCategoriaEditando={
        setCategoriaEditando
      }
    />

  );
}

export default App;