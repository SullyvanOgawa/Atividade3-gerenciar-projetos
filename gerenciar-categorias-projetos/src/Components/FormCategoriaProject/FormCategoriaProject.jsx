import { useState } from "react";

import Button from "../Botao/Botao";

export default function FormCategoriaProject({
  salvarCategoria
}) {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {

    e.preventDefault();

  
    if (!nome.trim() || !descricao.trim()) {

      setErro(
        'Todos os campos devem ser preenchidos.'
      );

      return;
    }

    setErro('');

    const novaCategoria = {
      id: Date.now(),
      nome,
      descricao
    };

    salvarCategoria(novaCategoria);

    // LIMPA CAMPOS
    setNome('');
    setDescricao('');
  }

  return (
    <div className="card p-4 shadow-sm">

      <h2 className="mb-4">
        Cadastro de Categoria Projeto
      </h2>

      <form onSubmit={handleSubmit}>

        {erro && (
          <div className="alert alert-danger">
            {erro}
          </div>
        )}

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