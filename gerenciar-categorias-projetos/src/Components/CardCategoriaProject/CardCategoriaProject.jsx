
export default function CardCategoriaProject({categoria}) {
  return (
    <div className="card p-3 shadow-sm">

      <h3>{categoria.nome}</h3>

      <p>{categoria.descricao}</p>

    </div>
  );
}