import { useState } from "react";

import FormCategoriaProject from "../Components/FormCategoriaProject/FormCategoriaProject";
import TabelaCategoria from "../Components/TabelaCategoria/TabelaCategoria";

export default function Categoria({
  categorias,
  cadastrarCategoria,
  editarCategoria,
  excluirCategoria
}) {

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [filtro, setFiltro] = useState("");
  const [editando, setEditando] = useState(null);

  async function salvar() {

    if (
      !nome.trim() ||
      !descricao.trim()
    ) {

      alert(
        "Preencha todos os campos."
      );

      return;
    }

    try {

      if (editando) {

        await editarCategoria({
          id: editando,
          nome,
          descricao
        });

      } else {

        await cadastrarCategoria({
          nome,
          descricao
        });

      }

      limpar();

    } catch (erro) {

      console.error(erro);

      alert(
        "Erro ao salvar categoria."
      );

    }

  }

  function limpar() {

    setNome("");
    setDescricao("");
    setEditando(null);

  }

  function editar(categoria) {

    setNome(categoria.nome);

    setDescricao(
      categoria.descricao
    );

    setEditando(categoria.id);

  }

  async function excluir(id) {

    const confirmar =
      window.confirm(
        "Deseja excluir esta categoria?"
      );

    if (!confirmar) {
      return;
    }

    try {

      await excluirCategoria(id);

      if (editando === id) {
        limpar();
      }

    } catch (erro) {

      console.error(erro);

      alert(
        "Erro ao excluir categoria."
      );

    }

  }

  const lista = categorias
    .filter((categoria) =>
      categoria.nome
        .toLowerCase()
        .includes(
          filtro.toLowerCase()
        )
    )
    .sort((a, b) =>
      a.nome.localeCompare(
        b.nome
      )
    );

  return (

    <div className="container py-4">

      <div className="mb-4">

        <h1
          style={{
            fontFamily: "Bebas Neue",
            color: "#2B6BCF",
            letterSpacing: "2px",
            fontSize: "3rem"
          }}
        >
          GESTÃO DE CATEGORIAS
        </h1>

        <p className="text-muted">
          Cadastro e gerenciamento de categorias de projetos.
        </p>

      </div>

      <FormCategoriaProject
        nome={nome}
        setNome={setNome}
        descricao={descricao}
        setDescricao={setDescricao}
        salvar={salvar}
        limpar={limpar}
        editando={editando}
      />

      <div className="card border-0 shadow-sm rounded-4 mt-4">

        <div className="card-body">

          <h5
            className="mb-3"
            style={{
              fontFamily: "Bebas Neue",
              color: "#2B6BCF",
              letterSpacing: "1px",
              fontSize: "2rem"
            }}
          >
            Categorias Cadastradas
          </h5>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Pesquisar categoria..."
            value={filtro}
            onChange={(e) =>
              setFiltro(
                e.target.value
              )
            }
          />

          <TabelaCategoria
            categorias={lista}
            editar={editar}
            excluir={excluir}
          />

        </div>

      </div>

    </div>

  );
}