import Chamado from '@/models/Chamado';
import { NextResponse } from "next/server";
import connect from '@/utils/db';

connect();

export async function POST(req) {   
  try {
        const { titulo, descricao, status, dataAbertura, usuario} = await req.json();
        console.log(titulo, descricao, status, dataAbertura, usuario);
        await connect();
        const newChamado = new Chamado({ titulo: titulo, descricao:descricao, status:status, dataAbertura: dataAbertura, usuario: usuario });
        await newChamado.save();
        console.log(newChamado);
        return NextResponse.json({ message: "Chamado Cadastrado com sucesso", status: 201 });
      } catch (error) {
        return NextResponse.json({ message: "Erro", status: 500 });
      }
}


