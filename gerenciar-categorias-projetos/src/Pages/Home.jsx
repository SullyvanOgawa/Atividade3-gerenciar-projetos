import ProjectCategoriaList from "../Components/ProjectCategoriaList/ProjectCategoriaList";

export default function Home({
  categorias,
  excluirCategoria,
  editarCategoria
}) {

  return (

    <div className="container py-4">

      <div className="mb-4">

        <h1 className="title-page mb-0">
          CATEGORIAS EM DESTAQUE
        </h1>

      </div>

      <ProjectCategoriaList
        categorias={categorias}
        excluirCategoria={
          excluirCategoria
        }
        editarCategoria={
              editarCategoria
            }
      />

    </div>
  );
}