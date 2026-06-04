
export default function FormCategoriaProject({
  nome,
  setNome,
  descricao,
  setDescricao,
  salvar,
  limpar,
  editando
}) {

  return (

    <div
      className="card border-0 shadow-sm rounded-4 p-4"
      style={{
        backgroundColor: "#FFFFFF"
      }}
    >

      <h2
        className="mb-1"
        style={{
          fontFamily: "Bebas Neue",
          color: "#2B6BCF",
          letterSpacing: "1px",
          fontSize: "2.5rem"
        }}
      >
        {
          editando
            ? "Editar Categoria"
            : "Cadastro de Categoria"
        }
      </h2>

      <p className="text-muted mb-4">
        Cadastro e organização de categorias
      </p>

      <div className="mb-4">

        <label className="form-label fw-semibold">
          Nome da Categoria
        </label>

        <input
          type="text"
          className="form-control rounded-3"
          placeholder="Digite o nome da categoria"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

      </div>

      <div className="mb-4">

        <label className="form-label fw-semibold">
          Descrição
        </label>

        <textarea
          rows="4"
          className="form-control rounded-3"
          placeholder="Digite uma descrição"
          value={descricao}
          onChange={(e) =>
            setDescricao(
              e.target.value
            )
          }
        />

      </div>

      <div className="d-flex gap-2">

        <button
          className="btn text-white"
          style={{
            backgroundColor: "#045148"
          }}
          onClick={salvar}
        >
          {
            editando
              ? "Atualizar"
              : "Salvar Categoria"
          }
        </button>

        <button
          className="btn btn-secondary"
          onClick={limpar}
        >
          Limpar
        </button>

      </div>

    </div>

  );
}