import CardCategoriaProject from "../CardCategoriaProject/CardCategoriaProject";

export default function ProjectCategoriaList({categorias, excluirCategoria}) {

  return (
    <div className="row g-3">

      {categorias.map((categoria) => (

        <div
          className="col-md-4"
          key={categoria.id}
        >

          <CardCategoriaProject
            categoria={categoria}
            excluirCategoria={excluirCategoria}
          />

        </div>

      ))}

    </div>
  );
}