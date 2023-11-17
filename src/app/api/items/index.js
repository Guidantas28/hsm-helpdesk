import Chamado from '@/models/Chamado';
import connect from '@/utils/db';

connect();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const chamado = await Chamado.find({});
        res.status(200).json(chamado);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens.' });
      }
      break;

    case 'POST':
      try {
        const { titulo, descricao, status, dataAbertura, dataFechamento, usuario } = req.body;
        const newItem = new Chamado({ titulo, descricao, status, dataAbertura, dataFechamento, usuario });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar item.' });
      }
      break;

    default:
      res.status(405).json({ error: 'Método não permitido.' });
      break;
  }
}