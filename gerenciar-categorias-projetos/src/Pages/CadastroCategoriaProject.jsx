import FormCategoriaProject from "../Components/FormCategoriaProject/FormCategoriaProject";

export default function CadastroCategoriaProject({categorias, setCategorias}) {

  function salvarCategoria(novaCategoria) {

    const novasCategorias = [
      ...categorias,
      novaCategoria
    ];

    setCategorias(novasCategorias);

    localStorage.setItem(
      'categorias',
      JSON.stringify(novasCategorias)
    );
  }

  return (
    <div className="container mt-4">

      <FormCategoriaProject
        salvarCategoria={salvarCategoria}
      />

    </div>
  );
}