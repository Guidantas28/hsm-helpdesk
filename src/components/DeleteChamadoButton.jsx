import { useState } from 'react';
import { MdDelete } from "react-icons/md";

export default function DeleteChamadoButton ({ chamadoId, onDeleteSuccess, onDeleteError }) {
  const handleDeleteChamado = async () => {
    try {
      const response = await fetch(`/api/delete?id=${chamadoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Chamado excluído com sucesso.');
      } else {
        const data = await response.json();
        console.error('Erro ao excluir chamado:', data.error);
      }
    } catch (error) {
      console.error('Erro ao excluir chamado:', error);
    }
  };

  return (
    <button onClick={handleDeleteChamado}>
      <MdDelete />
    </button>
  );
};
