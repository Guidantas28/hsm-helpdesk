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
          },
        });
  
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      }
      fetchData();
      console.log(data)
    };
  }, [])

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {chamados.map((chamado) => (
          <div key={chamado._id} className="border p-4 ">
            <p>{chamado.titulo}</p>
            <p>{chamado.descricao}</p>
          </div>
        ))}
      </div>
  );
}
