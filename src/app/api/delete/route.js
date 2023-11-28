import connect from '@/utils/db';
import Chamado from '@/models/Chamado';
import { NextResponse } from 'next/server';

export async function deleteHandler(req,res) {
    try {
      connect();
      const { id } = req.query;

      const chamado = await Chamado.findById(id);
      if (!chamado) {
        return NextResponse.json({ message: 'Chamado não encontrado.', status: 404 });
      }
      
      await Chamado.findByIdAndDelete(id);

      return NextResponse.json({ message: 'Chamado excluído com sucesso.', status: 200 });
    } catch (error) {
      console.error('Erro ao excluir chamado:', error);
      return NextResponse.json({ message: 'Erro interno no servidor', status: 500 });
    }
  }


