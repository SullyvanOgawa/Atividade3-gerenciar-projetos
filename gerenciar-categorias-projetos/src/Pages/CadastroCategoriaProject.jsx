import FormCategoriaProject from "../Components/FormCategoriaProject/FormCategoriaProject";

export default function CadastroCategoriaProject({
  cadastrarCategoria
}) {

  return (

    <div className="container mt-4">

      <FormCategoriaProject
        cadastrarCategoria={
          cadastrarCategoria
        }
      />

    </div>

  );
}