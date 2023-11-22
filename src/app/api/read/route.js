import connect from '@/utils/db';
import Chamado from '@/models/Chamado';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {
        await connect();

        const chamados = await Chamado.find();
        console.log(chamados)
        return NextResponse.json({ message: chamados, status: 200 });
    } catch (error) {
        console.error('Erro ao buscar chamados:', error);
        return NextResponse.json({ message: "Erro ao buscar chamados", status: 500 })
    }
}
