"use client";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/read", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.statusText}`);
        }

        const data = await response.json();
        setChamados(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="m-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
      {Array.isArray(chamados) ? (
        chamados.map((chamado) => (
          <div key={chamado._id} className="border p-4">
            <h1>{chamado.titulo}</h1>
            <span>{chamado.status}</span>
            <p>{chamado.descricao}</p>
            <p>{chamado.dataAbertura}</p>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
