import ProjectCategoriaList from "../Components/ProjectCategoriaList/ProjectCategoriaList";

export default function CategoriasProject({
  categorias,
  excluirCategoria
}) {

  return (

    <div className="container py-4">

      {/* TOPO */}
      <div className="mb-4">

        <h1
          className="mb-0"
          style={{
            fontFamily: 'Bebas Neue',
            color: '#2B6BCF',
            letterSpacing: '2px',
            fontSize: '3rem'
          }}
        >
          CATEGORIAS
        </h1>

        <p className="text-muted">
          Gerenciamento das categorias cadastradas
        </p>

      </div>

      
      {categorias.length > 0 ? (

        <div
          className="card border-0 shadow-sm rounded-4 p-4 mx-auto"
          style={{
            backgroundColor: '#FFFFFF',
            maxWidth: '1200px'
          }}
        >

          <ProjectCategoriaList
            categorias={categorias}
            excluirCategoria={excluirCategoria}
          />

        </div>

      ) : (

        <div
          className="text-center p-5 rounded-4 shadow-sm"
          style={{
            backgroundColor: '#FFFFFF'
          }}
        >

          <h3
            style={{
              fontFamily: 'Bebas Neue',
              color: '#2B6BCF',
              letterSpacing: '1px'
            }}
          >
            Nenhuma categoria cadastrada
          </h3>

          <p className="text-muted mb-0">
            Cadastre uma nova categoria para começar.
          </p>

        </div>

      )}

    </div>
  );
}