import React from "react";
import connect from "../utils/db";
import Chamado from "../models/Chamado";

export default function Dashboard({ chamados }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {chamados.map((chamado) => (
          <div key={chamado._id} className="border p-4">
            <h2 className="text-xl font-bold mb-2">Título</h2>
            <p>{chamado.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await connect();

  try {
    const chamados = await Chamado.find();
    return {
      props: {
        chamados: JSON.parse(JSON.stringify(chamados)),
      },
    };
  } catch (error) {
    console.error("Erro ao buscar chamados:", error);
    return {
      props: {
        chamados: [],
      },
    };
  }
}
