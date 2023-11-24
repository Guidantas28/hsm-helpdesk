import connect from '@/utils/db';
import Chamado from '@/models/Chamado';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {
        connect();

        const chamados = await Chamado.find();
        
        console.log(chamados)
        return NextResponse.json(chamados);
    } catch (error) {
        console.error('Erro ao buscar chamados:', error);
        return NextResponse.json({ message: "Erro ao buscar chamados", status: 500 })
    }
}
