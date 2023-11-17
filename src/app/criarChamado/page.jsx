"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const NovoChamado = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [dataAbertura, setDataAbertura] = useState("");
  const [dataFechamento, setDataFechamento] = useState("");
  const [usuario, setUsuario] = useState("");

  const handleSubmit = async (e, value) => {
    e.preventDefault();

    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo,
        descricao,
        status,
        dataAbertura,
        dataFechamento,
        usuario,
      }),
    });

    if (response.ok) {
      console.log("Chamado criado com sucesso!");
    } else {
      console.error("Erro ao criar chamado.");
      console.log(response);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold mb-6 bg-gray-800">Novo Chamado</h1>
        <form onSubmit={handleSubmit} className="bg-gray-800">
          <label className="block mb-4 bg-gray-800">
            Título:
            <input
              name="titulo"
              type="text"
              value={titulo || ''}
              onChange={(e) => setTitulo(e.target.value)}
              className="block w-full mt-1 p-2 rounded bg-gray-700"
            />
          </label>
          <label className="block mb-4 bg-gray-800">
            Descrição:
            <textarea
              name="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="block w-full mt-1 p-2 rounded bg-gray-700"
            />
          </label>
          <label className="block mb-4 bg-gray-800">
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block w-full mt-1 p-2 rounded bg-gray-700"
              name="status"
            >
              <option value="aberto">
                Aberto
              </option>
              <option value="emAndamento">Em andamento</option>
              <option value="fechado">Fechado</option>
            </select>
          </label>
          <label className="block mb-4 bg-gray-800">
            Data Abertura:
            <input
              name="dateAbertura"
              type="date"
              value={dataAbertura}
              onChange={(e) => setDataAbertura(e.target.value)}
              className="block w-full mt-1 p-2 rounded bg-gray-700"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Criar Chamado
          </button>
        </form>
      </div>
    </div>
  );
};

export default NovoChamado;
