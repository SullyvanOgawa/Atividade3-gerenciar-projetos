import { useEffect, useState } from 'react';

import Categoria from './Pages/Categoria';

function App() {

  const [categorias, setCategorias] =
    useState([]);

  async function atualizarCategorias() {

    try {

      const resposta = await fetch(
        'http://localhost:5000/categorias'
      );

      const dados =
        await resposta.json();

      setCategorias(
        dados.categorias || []
      );

    } catch (error) {

      console.error(
        'Erro ao carregar categorias:',
        error
      );

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

      console.error(
        'Erro ao cadastrar:',
        error
      );

    }

  }

  async function editarCategoria(
    categoriaAtualizada
  ) {

    try {

      const resposta = await fetch(
        `http://localhost:5000/categorias/${categoriaAtualizada.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type':
              'application/json'
          },
          body: JSON.stringify(
            categoriaAtualizada
          )
        }
      );

      const dados =
        await resposta.json();

      if (
        !resposta.ok ||
        !dados.status
      ) {

        console.error(
          'Erro ao editar:',
          dados.mensagem
        );

        return;

      }

      await atualizarCategorias();

    } catch (error) {

      console.error(
        'Erro de rede:',
        error
      );

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

      console.error(
        'Erro ao excluir:',
        error
      );

    }

  }

  useEffect(() => {

    const carregarCategorias =
      async () => {

        try {

          const resposta =
            await fetch(
              'http://localhost:5000/categorias'
            );

          const dados =
            await resposta.json();

          setCategorias(
            dados.categorias || []
          );

        } catch (error) {

          console.error(
            'Erro ao carregar categorias:',
            error
          );

          setCategorias([]);

        }

      };

    carregarCategorias();

  }, []);

  return (

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

  );

}

export default App;