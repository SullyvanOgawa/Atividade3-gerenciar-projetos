import { useState } from "react";

import Button from "../Botao/Botao";

export default function FormCategoriaProject({
  salvarCategoria
}) {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const novaCategoria = {
      id: Date.now(),
      nome,
      descricao
    };

    salvarCategoria(novaCategoria);

    setNome('');
    setDescricao('');
  }

  return (
    <div className="card p-4 shadow-sm">

      <h2 className="mb-4">
        Cadastro de Categoria Projeto
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label className="form-label">
            Nome da Categoria
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome da categoria"
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
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
            value={descricao}
            onChange={(e) =>
              setDescricao(e.target.value)
            }
          ></textarea>

        </div>

        <Button
          texto="Salvar Categoria"
          tipo="submit"
        />

      </form>

    </div>
  );
}