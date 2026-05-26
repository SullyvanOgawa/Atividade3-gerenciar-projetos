export default function CardCategoriaProject({
  categoria,
  selecionarCategoria,
  selecionada
}) {

  return (

    <div
      className={`card border-0 shadow-sm h-100 rounded-4 ${
        selecionada
          ? 'border border-primary'
          : ''
      }`}
      style={{
        cursor: 'pointer',
        transition: '0.2s'
      }}
      onClick={() =>
        selecionarCategoria(categoria)
      }
    >

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

      </div>

    </div>
  );
}