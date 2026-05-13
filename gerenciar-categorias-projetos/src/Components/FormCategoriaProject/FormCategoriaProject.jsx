export default function FormCategoriaProject() {
    return(
         <div className="card p-4 shadow-sm">

            <h2 className="mb-4">
                Cadastro de Categoria
            </h2>

            <form>

                <div className="mb-3">
                <label className="form-label">
                    Nome da Categoria
                </label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o nome da categoria"
                />
                </div>

                <div className="mb-3">
                <label className="form-label">
                    Descrição
                </label>

                <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Digite uma descrição"
                ></textarea>
                </div>

                <button
                type="submit"
                className="btn btn-dark"
                >
                Salvar Categoria
                </button>

            </form>
        </div>
    );
}