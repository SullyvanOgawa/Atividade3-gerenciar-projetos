import { useState } from "react";
import { Link } from "react-router-dom";

import FormProjeto from "../Components/FormProjeto/FormProjeto";
import TabelaProjeto from "../Components/TabelaProjeto/TabelaProjeto";

export default function Projeto({
  projetos,
  categorias,
  cadastrarProjeto,
  editarProjeto,
  excluirProjeto
}) {

  const [nome, setNome] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [filtro, setFiltro] = useState("");
  const [editando, setEditando] = useState(null);

  async function salvar() {
    if (!nome.trim() || !categoriaId) {
      alert("Preencha o nome do projeto e selecione uma categoria.");
      return;
    }

    const categoriaSelecionada = categorias.find(
      (categoria) => String(categoria.id) === String(categoriaId)
    );

    if (!categoriaSelecionada) {
      alert("Categoria inválida.");
      return;
    }

    try {
      if (editando) {
        await editarProjeto({
          id: editando,
          nome,
          categoria: categoriaSelecionada,
        });
      } else {
        await cadastrarProjeto({
          nome,
          categoria: categoriaSelecionada,
        });
      }

      limpar();
    } catch (erro) {
      console.error(erro);
      alert("Erro ao salvar projeto.");
    }
  }

  function limpar() {

    setNome("");
    setCategoriaId("");
    setEditando(null);

  }

  function editar(projeto) {

    setNome(projeto.nome);

    setCategoriaId(
      projeto.categoria ? String(projeto.categoria.id) : ""
    );

    setEditando(projeto.id);

  }

  async function excluir(id) {

    const confirmar =
      window.confirm(
        "Deseja excluir este projeto?"
      );

    if (!confirmar) {
      return;
    }

    try {

      await excluirProjeto(id);

      if (editando === id) {
        limpar();
      }

    } catch (erro) {

      console.error(erro);

      alert(
        "Erro ao excluir projeto."
      );

    }

  }

  const lista = projetos
    .filter((projeto) =>
      projeto.nome
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

      <div className="mb-4 d-flex justify-content-between align-items-start">

        <div>

          <h1
            style={{
              fontFamily: "Bebas Neue",
              color: "#2B6BCF",
              letterSpacing: "2px",
              fontSize: "3rem"
            }}
          >
            GESTÃO DE PROJETOS
          </h1>

          <p className="text-muted">
            Cadastro e gerenciamento de projetos.
          </p>

        </div>

        <Link to="/" className="btn btn-outline-primary mt-2">
          Ir para Categorias
        </Link>

      </div>

      <FormProjeto
        nome={nome}
        setNome={setNome}
        categoriaId={categoriaId}
        setCategoriaId={setCategoriaId}
        categorias={categorias}
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
            Projetos Cadastrados
          </h5>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Pesquisar projeto..."
            value={filtro}
            onChange={(e) =>
              setFiltro(
                e.target.value
              )
            }
          />

          <TabelaProjeto
            projetos={lista}
            editar={editar}
            excluir={excluir}
          />

        </div>

      </div>

    </div>

  );
}
