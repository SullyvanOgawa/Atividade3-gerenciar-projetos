import { useState } from "react";

export default function CategoriasProject({
  categorias,
  excluirCategoria,
  editarCategoria
}) {

  const [busca, setBusca] =
    useState("");

  const [
    categoriaSelecionada,
    setCategoriaSelecionada
  ] = useState(null);

  const [
    mostrarResultados,
    setMostrarResultados
  ] = useState(false);

  const [
    editando,
    setEditando
  ] = useState(false);

  const [nome, setNome] =
    useState("");

  const [
    descricao,
    setDescricao
  ] = useState("");

  const categoriasFiltradas =
    categorias.filter((categoria) => {

      const correspondeBusca =
        categoria.nome
          .toLowerCase()
          .includes(
            busca.toLowerCase()
          );

      const naoSelecionada =
        categoria.id !==
        categoriaSelecionada?.id;

      return (
        correspondeBusca &&
        naoSelecionada
      );

    });

  function selecionarCategoria(
    categoria
  ) {

    setCategoriaSelecionada(
      categoria
    );

    setNome(categoria.nome);

    setDescricao(
      categoria.descricao
    );

    setMostrarResultados(false);

    setEditando(false);
  }

  async function salvarEdicao() {

    const categoriaAtualizada = {
      id: categoriaSelecionada.id,
      nome,
      descricao
    };

    await editarCategoria(
      categoriaAtualizada
    );

    setCategoriaSelecionada({
      ...categoriaSelecionada,
      nome,
      descricao
    });

    setEditando(false);
  }

  function cancelarEdicao() {

    setNome(
      categoriaSelecionada.nome
    );

    setDescricao(
      categoriaSelecionada.descricao
    );

    setEditando(false);
  }

  function limparBusca() {

    setBusca("");

    setCategoriaSelecionada(
      null
    );

    setMostrarResultados(
      false
    );

    setEditando(false);
  }

  return (

    <div className="container py-4">

      <div className="mb-4">

        <h1
          className="mb-0"
          style={{
            fontFamily:
              'Bebas Neue',
            color: '#2B6BCF',
            letterSpacing: '2px',
            fontSize: '3rem'
          }}
        >
          CATEGORIAS
        </h1>

        <p className="text-muted">
          Gerenciamento das
          Categorias Cadastradas
        </p>

      </div>

      <div className="position-relative mb-4">

        <div className="d-flex gap-2">

          <input
            type="text"
            className="form-control"
            placeholder="Buscar categoria..."
            value={busca}
            onFocus={() =>
              setMostrarResultados(true)
            }
            onChange={(e) => {

              setBusca(e.target.value);

              setMostrarResultados(true);

            }}
          />

          <button
            className="btn btn-outline-secondary"
            onClick={limparBusca}
          >
            Limpar
          </button>

        </div>

        {mostrarResultados && (

          <div
            className="card border-0 shadow-sm mt-2 overflow-hidden"
          >

            {categoriasFiltradas.length > 0 ? (

              categoriasFiltradas.map(
                (categoria) => (

                  <button
                    key={categoria.id}
                    className="btn text-start p-3 border-bottom"
                    style={{
                      borderRadius: 0
                    }}
                    onClick={() =>
                      selecionarCategoria(
                        categoria
                      )
                    }
                  >

                    {categoria.nome}

                  </button>

                )
              )

            ) : (

              <div className="p-3 text-muted">

                Nenhuma categoria encontrada

              </div>

            )}

          </div>

        )}

      </div>

      {!categoriaSelecionada ? (

        <div
          className="card border-0 shadow-sm rounded-4 p-4 text-center mx-auto"
          style={{
            maxWidth: '700px'
          }}
        >

          <h3
            style={{
              fontFamily:
                'Bebas Neue',
              color: '#2B6BCF'
            }}
          >
            Nenhuma categoria
            selecionada
          </h3>

          <p className="text-muted mb-0">
            Busque uma categoria e
            selecione um item para
            editar ou excluir.
          </p>

        </div>

      ) : (

        <div
          className="card border-0 shadow-sm rounded-4 p-3"
          style={{
            maxWidth: '900px'
          }}
        >

          {!editando ? (

            <>

              <h2
                className="mb-3"
                style={{
                  fontFamily:
                    'Bebas Neue',
                  color: '#2B6BCF',
                  letterSpacing: '1px'
                }}
              >
                {categoriaSelecionada.nome}
              </h2>

              <p
                className="text-muted mb-3"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}
              >
                {
                  categoriaSelecionada.descricao
                }
              </p>

              <div className="d-flex gap-2 justify-content-end">

                <button
                  className="btn btn-primary px-4"
                  onClick={() =>
                    setEditando(true)
                  }
                >
                  Editar
                </button>

                <button
                  className="btn text-white px-4"
                  style={{
                    backgroundColor:
                      '#DA5321'
                  }}
                  onClick={async () => {

                    await excluirCategoria(
                      categoriaSelecionada.id
                    );

                    setCategoriaSelecionada(
                      null
                    );

                    setBusca("");

                    setMostrarResultados(
                      false
                    );

                    setEditando(false);

                  }}
                >
                  Excluir
                </button>

              </div>

            </>

          ) : (

            <>

              <input
                type="text"
                className="form-control mb-3"
                value={nome}
                onChange={(e) =>
                  setNome(
                    e.target.value
                  )
                }
              />

              <textarea
                className="form-control mb-3"
                rows="4"
                value={descricao}
                onChange={(e) =>
                  setDescricao(
                    e.target.value
                  )
                }
              ></textarea>

              <div className="d-flex gap-2 justify-content-end">

                <button
                  className="btn btn-success px-4"
                  onClick={
                    salvarEdicao
                  }
                >
                  Salvar
                </button>

                <button
                  className="btn btn-secondary px-4"
                  onClick={
                    cancelarEdicao
                  }
                >
                  Cancelar
                </button>

              </div>

            </>

          )}

        </div>

      )}

    </div>
  );
}