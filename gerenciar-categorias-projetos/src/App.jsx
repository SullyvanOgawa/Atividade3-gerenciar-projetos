import { useEffect, useState } from 'react';

import { AppRoutes } from './Routes/AppRoutes';

const API_URL = 'http://localhost:3000';

// A API guarda os campos em inglês (name). A tela trabalha com nome/categoria.
function categoriaApiParaTela(categoriaApi) {
  return {
    id: categoriaApi.id,
    nome: categoriaApi.name
  };
}

function categoriaTelaParaApi(categoriaTela) {
  return {
    name: categoriaTela.nome
  };
}

function projetoApiParaTela(projetoApi) {
  return {
    id: projetoApi.id,
    nome: projetoApi.name,
    categoria: projetoApi.category
      ? {
          id: projetoApi.category.id,
          nome: projetoApi.category.name
        }
      : null
  };
}

function projetoTelaParaApi(projetoTela) {
  return {
    name: projetoTela.nome,
    category: {
      id: projetoTela.categoria.id,
      name: projetoTela.categoria.nome
    }
  };
}

function App() {

  const [categorias, setCategorias] = useState([]);
  const [projetos, setProjetos] = useState([]);

  async function atualizarCategorias() {

    try {

      const resposta = await fetch(`${API_URL}/category`);
      const dados = await resposta.json();
      const lista = dados.category || [];

      setCategorias(lista.map(categoriaApiParaTela));

    } catch (error) {

      alert('Erro ao carregar categorias:', error);
      setCategorias([]);

    }

  }

  async function atualizarProjetos() {

    try {

      const resposta = await fetch(`${API_URL}/project`);
      const dados = await resposta.json();
      const lista = dados.projects || [];

      setProjetos(lista.map(projetoApiParaTela));

    } catch (error) {

      alert('Erro ao carregar projetos:', error);
      setProjetos([]);

    }

  }

  async function cadastrarCategoria(novaCategoria) {

    try {

      await fetch(`${API_URL}/category`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoriaTelaParaApi(novaCategoria))
      });

      await atualizarCategorias();

    } catch (error) {

      alert('Erro ao cadastrar categoria:', error);

    }

  }

  async function editarCategoria(categoriaAtualizada) {

    try {

      const resposta = await fetch(`${API_URL}/category/${categoriaAtualizada.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoriaTelaParaApi(categoriaAtualizada))
      });

      const dados = await resposta.json();

      if (!resposta.ok || !dados.status) {
        console.error('Erro ao editar categoria:', dados.mensagem);
        return;
      }

      await atualizarCategorias();

    } catch (error) {

      console.error('Erro de rede ao editar categoria:', error);

    }

  }

  async function excluirCategoria(id) {

    const categoriaEmUso = projetos.some(
    (projeto) => projeto.categoria?.id === id
  );

  if (categoriaEmUso) {
    alert(
      'Não é possível excluir esta categoria, pois ela está vinculada a um projeto.'
    );

    return;
  }

  try {

    const resposta = await fetch(`${API_URL}/category/${id}`, {
      method: 'DELETE'
    });

    if (!resposta.ok) {
      alert('Não foi possível excluir a categoria.');
      return;
    }

    await atualizarCategorias();
    await atualizarProjetos();

  } catch (error) {

    alert('Erro ao excluir categoria.');

  }

  }

  async function cadastrarProjeto(novoProjeto) {

    try {

      await fetch(`${API_URL}/project`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projetoTelaParaApi(novoProjeto))
      });

      await atualizarProjetos();

    } catch (error) {

      alert('Erro ao cadastrar projeto:', error);

    }

  }

  async function editarProjeto(projetoAtualizado) {

    try {

      const resposta = await fetch(`${API_URL}/project/${projetoAtualizado.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projetoTelaParaApi(projetoAtualizado))
      });

      const dados = await resposta.json();

      if (!resposta.ok || !dados.status) {
        console.error('Erro ao editar projeto:', dados.mensagem);
        return;
      }

      await atualizarProjetos();

    } catch (error) {

      console.error('Erro de rede ao editar projeto:', error);

    }

  }

  async function excluirProjeto(id) {

    try {

      await fetch(`${API_URL}/project/${id}`, {
        method: 'DELETE'
      });

      await atualizarProjetos();

    } catch (error) {

      alert('Erro ao excluir projeto:', error);

    }

  }

  useEffect(() => {

    atualizarCategorias();
    atualizarProjetos();

  }, []);

  return (

    <AppRoutes
      categorias={categorias}
      cadastrarCategoria={cadastrarCategoria}
      editarCategoria={editarCategoria}
      excluirCategoria={excluirCategoria}
      projetos={projetos}
      cadastrarProjeto={cadastrarProjeto}
      editarProjeto={editarProjeto}
      excluirProjeto={excluirProjeto}
    />

  );

}

export default App;
