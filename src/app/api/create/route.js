import Chamado from '@/models/Chamado';
import { NextResponse } from "next/server";
import connect from '@/utils/db';

connect();

export async function POST(req) {   
  try {
        const { titulo, descricao, status, dataAbertura } = await req.json();
        console.log(titulo, descricao, status, dataAbertura)
        const newItem = new Chamado({ titulo, descricao, status, dataAbertura, usuario });
        await newItem.save();
        return NextResponse.json({ message: "Chamado Cadastrado com sucesso", status: 201 });
      } catch (error) {
        return NextResponse.json({ message: "Erro", status: 500 });
      }
}


