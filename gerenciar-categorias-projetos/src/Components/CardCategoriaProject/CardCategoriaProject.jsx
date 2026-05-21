import { useState } from "react";

export default function CardCategoriaProject({
  categoria,
  excluirCategoria,
  editarCategoria
}) {

  const [editando, setEditando] =
    useState(false);

  const [nome, setNome] =
    useState(categoria.nome);

  const [descricao, setDescricao] =
    useState(categoria.descricao);

  async function salvarEdicao() {

    const categoriaAtualizada = {
      id: categoria.id,
      nome,
      descricao
    };

    try {

      await editarCategoria(
        categoriaAtualizada
      );

      setEditando(false);

    } catch (error) {

      console.error(error);

    }
  }

  function cancelarEdicao() {

    setNome(categoria.nome);

    setDescricao(
      categoria.descricao
    );

    setEditando(false);
  }

  return (

    <div className="card border-0 shadow-sm h-100 rounded-4">

      <div className="card-body d-flex flex-column">

        {editando ? (

          <>

            <input
              type="text"
              className="form-control mb-3"
              value={nome}
              onChange={(e) =>
                setNome(e.target.value)
              }
            />

            <textarea
              className="form-control"
              rows="4"
              value={descricao}
              onChange={(e) =>
                setDescricao(e.target.value)
              }
            ></textarea>

          </>

        ) : (

          <>

            <h3
              className="fw-bold mb-3"
              style={{
                fontFamily: 'Bebas Neue',
                color: '#2B6BCF',
                letterSpacing: '1px'
              }}
            >
              {categoria.nome}
            </h3>

            <p className="text-muted flex-grow-1">
              {categoria.descricao}
            </p>

          </>

        )}

        <div className="d-flex gap-2 mt-3">

          {editando ? (

            <>

              <button
                className="btn btn-success flex-grow-1"
                onClick={salvarEdicao}
              >
                Salvar
              </button>

              <button
                className="btn btn-secondary flex-grow-1"
                onClick={cancelarEdicao}
              >
                Cancelar
              </button>

            </>

          ) : (

            <>

              <button
                className="btn btn-primary flex-grow-1"
                onClick={() =>
                  setEditando(true)
                }
              >
                Editar
              </button>

              <button
                className="btn text-white flex-grow-1"
                style={{
                  backgroundColor: '#DA5321'
                }}
                onClick={() =>
                  excluirCategoria(
                    categoria.id
                  )
                }
              >
                Excluir
              </button>

            </>

          )}

        </div>

      </div>

    </div>
  );
}