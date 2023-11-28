import React from 'react';
import DeleteChamadoButton from './DeleteChamadoButton';

export default function DashboardComponent ({ chamados }) {
  const handleDeleteSuccess = () => {
    console.log('Recarregar a lista de chamados após a exclusão bem-sucedida.');
  };

  const handleDeleteError = (error) => {
    console.error('Erro durante a exclusão:', error);
  }
  return (
    <div className="m-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
     {Array.isArray(chamados) ? (
       chamados.map((chamado) => (
         <div key={chamado._id} className="border p-4">
           <h1>{chamado.titulo}</h1>
           <span>{chamado.status}</span>
           <p>{chamado.descricao}</p>
           <p>{chamado.dataAbertura}</p>
           <DeleteChamadoButton chamadoId={chamado._id} onDeleteSuccess={handleDeleteSuccess} onDeleteError={handleDeleteError} />
         </div>
       ))
     ) : (
       <p>Carregando...</p>
     )}
   </div>
 );
 };