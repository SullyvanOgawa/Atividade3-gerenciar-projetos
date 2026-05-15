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

    setNome('');
    setDescricao('');
  }

  return (

    <div
      className="card border-0 shadow-sm rounded-4 p-4"
      style={{
        backgroundColor: '#FFFFFF'
      }}
    >

      <h2
        className="mb-1"
        style={{
          fontFamily: 'Bebas Neue',
          color: '#2B6BCF',
          letterSpacing: '1px',
          fontSize: '2.5rem'

        }}
      >
        Cadastro de Categoria
      </h2>

      <p className="text-muted mb-4">
        Cadastro e organização de categorias
      </p>

      <form onSubmit={handleSubmit}>

        {erro && (
          <div className="alert alert-danger">
            {erro}
          </div>
        )}

        <div className="mb-4">

          <label className="form-label fw-semibold">
            Nome da Categoria
          </label>

          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Digite o nome da categoria"
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
          />

        </div>

        <div className="mb-4">

          <label className="form-label fw-semibold">
            Descrição
          </label>

          <textarea
            className="form-control rounded-3"
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