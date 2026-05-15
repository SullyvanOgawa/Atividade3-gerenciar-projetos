export default function CardCategoriaProject({
  categoria,
  excluirCategoria
}) {

  return (

    <div className="card border-0 shadow-sm h-100 rounded-4">

      <div className="card-body d-flex flex-column">

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

        {excluirCategoria && (

          <button
            className="btn mt-3 text-white"
            style={{
              backgroundColor: '#DA5321'
            }}
            onClick={() =>
              excluirCategoria(categoria.id)
            }
          >
            Excluir
          </button>

        )}

      </div>

    </div>
  );
}