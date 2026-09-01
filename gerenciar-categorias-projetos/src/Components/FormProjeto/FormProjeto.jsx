export default function FormProjeto({
  nome,
  setNome,
  categoriaId,
  setCategoriaId,
  categorias,
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
            ? "Editar Projeto"
            : "Cadastro de Projeto"
        }
      </h2>

      <p className="text-muted mb-4">
        Cadastro e organização de projetos
      </p>

      <div className="mb-4">

        <label className="form-label fw-semibold">
          Nome do Projeto
        </label>

        <input
          type="text"
          className="form-control rounded-3"
          placeholder="Digite o nome do projeto"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

      </div>

      <div className="mb-4">

        <label className="form-label fw-semibold">
          Categoria
        </label>

        <select
          className="form-select rounded-3"
          value={categoriaId}
          onChange={(e) =>
            setCategoriaId(e.target.value)
          }
        >

          <option value="">
            Selecione uma categoria
          </option>

          {categorias.map((categoria) => (

            <option
              key={categoria.id}
              value={categoria.id}
            >
              {categoria.nome}
            </option>

          ))}

        </select>

        {categorias.length === 0 && (

          <div className="form-text text-danger">
            Cadastre uma categoria antes de criar um projeto.
          </div>

        )}

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
              : "Salvar Projeto"
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
