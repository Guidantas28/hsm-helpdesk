"use client"
import { useState } from 'react';

const NovoChamado = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/chamados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo, descricao }),
    });

    if (response.ok) {
      console.log('Chamado criado com sucesso!');
    } else {
      console.error('Erro ao criar chamado.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold mb-6 bg-gray-800">Novo Chamado</h1>
        <form onSubmit={handleSubmit} className='bg-gray-800'>
          <label className="block mb-4 bg-gray-800">
            Título:
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="block w-full mt-1 p-2 rounded bg-gray-700"
            />
          </label>
          <label className="block mb-4 bg-gray-800">
            Descrição:
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="block w-full mt-1 p-2 rounded bg-gray-700"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            handleSubmit={handleSubmit}
          >
            Criar Chamado
          </button>
        </form>
      </div>
    </div>
  );
};

export default NovoChamado;