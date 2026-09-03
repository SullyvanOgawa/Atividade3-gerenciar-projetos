export default function TabelaCategoria({
  categorias,
  editar,
  excluir
}) {

  if (categorias.length === 0) {

    return (

      <div className="text-center py-4">

        <p className="text-muted mb-0">
          Nenhuma categoria cadastrada.
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
              Categoria
            </th>

            <th width="220">
              Ações
            </th>

          </tr>

        </thead>

        <tbody>

          {categorias.map(
            (categoria) => (

              <tr
                key={categoria.id}
              >

                <td>
                  <strong>
                    {categoria.nome}
                  </strong>
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
                        editar(categoria)
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
                          categoria.id
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
