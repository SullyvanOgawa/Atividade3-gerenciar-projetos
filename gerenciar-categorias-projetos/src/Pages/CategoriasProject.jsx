import ProjectCategoriaList from "../Components/ProjectCategoriaList/ProjectCategoriaList";

export default function CategoriasProject({
  categorias
}) {

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Categorias
      </h1>

      <ProjectCategoriaList
        categorias={categorias}
      />

    </div>
  );
}