export default function CardCategoriaProject({categoria,excluirCategoria}) {

  return (
    <div className="card p-3 shadow-sm">

      <h3>{categoria.nome}</h3>

      <p>{categoria.descricao}</p>

      {excluirCategoria && (

        <button
          className="btn btn-danger mt-3"
          onClick={() =>
            excluirCategoria(categoria.id)
          }
        >
          Excluir
        </button>

      )}

    </div>
  );
}