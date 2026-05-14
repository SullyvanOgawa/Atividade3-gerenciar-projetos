import ProjectCategoriaList from "../Components/ProjectCategoriaList/ProjectCategoriaList";

export default function Home({categorias }) {

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Categorias em Destaque
      </h1>

      <ProjectCategoriaList
        categorias={categorias}
      />

    </div>
  );
}