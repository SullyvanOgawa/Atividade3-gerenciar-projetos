import CardCategoriaProject from "../CardCategoriaProject/CardCategoriaProject";

export default function ProjectCategoriaList({categorias = [], excluirCategoria, editarCategoria,mostrarAcoes = true}){

  if (!Array.isArray(categorias)) {

    return <h3>Carregando...</h3>;

  }

  return (

    <div className="row g-3">

      {categorias.map((categoria) => (

        <div
          className="col-md-4"
          key={categoria.id}
        >

          <CardCategoriaProject
            categoria = {categoria}
            excluirCategoria = {excluirCategoria}
            editarCategoria = {editarCategoria}
            mostrarAcoes = {mostrarAcoes}
             
          />

        </div>

      ))}

    </div>
  );
}