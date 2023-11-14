// pages/api/items/index.js
import { connect } from '../../../db';
import Item from '../../../models/Item';

connect();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const items = await Item.find({});
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens.' });
      }
      break;

    case 'POST':
      try {
        const { name, description } = req.body;
        const newItem = new Item({ name, description });
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