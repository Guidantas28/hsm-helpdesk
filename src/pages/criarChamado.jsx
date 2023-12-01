"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LayoutAdmin from "@/components/LayoutAdmin";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function NovoChamado({ initialDateTime }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [dataAbertura, setDataAbertura] = useState(initialDateTime);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e, value) => {
    e.preventDefault()

    if (!titulo || !descricao || !status || !dataAbertura) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

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
      }),
    });

    if (response.ok) {
      console.log("Chamado criado com sucesso!");
      router.push("/dashboard");
    } else {
      console.error("Erro ao criar chamado.");
      console.log(response);
    }
  };

  return (
    <LayoutAdmin>
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold mb-6 bg-gray-800">Novo Chamado</h1>
        {error && <p className="text-red-500 font-semibold text-lg mb-4 bg-gray-800 ">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-gray-800">
          <label className="block mb-4 bg-gray-800">
            Título:
            <input
              name="titulo"
              type="text"
              className={`block w-full mt-1 p-2 rounded bg-gray-700`}
              value={titulo || ""}
              onChange={(e) => setTitulo(e.target.value)}
              />
          </label>
          <label className="block mb-4 bg-gray-800">
            Descrição:
            <textarea
              name="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className={`block w-full mt-1 p-2 rounded bg-gray-700`}
              />
          </label>
          <label className="block mb-4 bg-gray-800">
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={`block w-full mt-1 p-2 rounded bg-gray-700`}
              name="status"
            >
              <option value="">Selecione</option>
              <option value="aberto">Aberto</option>
              <option value="emAndamento">Em andamento</option>
              <option value="fechado">Fechado</option>
            </select>
          </label>
          <label className="block mb-4 bg-gray-800">
            Data e hora:
            <input
              name="dataAbertura"
              type="text"
              value={dataAbertura}
              onChange={(e) => setDataAbertura(e.target.value)}
              className="block w-full mt-1 p-2 rounded bg-gray-700"
              readOnly
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
    </LayoutAdmin>
  );
}

export async function getServerSideProps(){
  const initialDateTime = format(new Date(), "dd/MM/yyyy HH:mm", { locale: ptBR, timeZone: 'America/Sao_Paulo' });

  return {
    props: {
      initialDateTime,
    },
  };
}