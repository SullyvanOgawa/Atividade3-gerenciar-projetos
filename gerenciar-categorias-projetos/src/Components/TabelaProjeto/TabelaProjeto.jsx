export default function TabelaProjeto({
  projetos,
  editar,
  excluir
}) {

  if (projetos.length === 0) {

    return (

      <div className="text-center py-4">

        <p className="text-muted mb-0">
          Nenhum projeto cadastrado.
        </p>

      </div>

    );

  }

  return (

    <div className="table-responsive">

      <table
        className="
          table
          table-hover
          align-middle
          mb-0
        "
      >

        <thead>

          <tr>

            <th>
              Nome
            </th>

            <th>
              Categoria
            </th>

            <th width="220">
              Ações
            </th>

          </tr>

        </thead>

        <tbody>

          {projetos.map(
            (projeto) => (

              <tr
                key={projeto.id}
              >

                <td>
                  <strong>
                    {projeto.nome}
                  </strong>
                </td>

                <td>
                  {projeto.categoria?.nome}
                </td>

                <td>

                  <div className="d-flex gap-2">

                    <button
                      className="
                        btn
                        btn-warning
                        btn-sm
                      "
                      onClick={() =>
                        editar(projeto)
                      }
                    >
                      Editar
                    </button>

                    <button
                      className="
                        btn
                        btn-danger
                        btn-sm
                      "
                      onClick={() =>
                        excluir(
                          projeto.id
                        )
                      }
                    >
                      Excluir
                    </button>

                  </div>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );

}
