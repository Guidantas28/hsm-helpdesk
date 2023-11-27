import React from 'react';

const DashboardComponent = ({ chamados }) => {
  
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
 );;
};

export default DashboardComponent;