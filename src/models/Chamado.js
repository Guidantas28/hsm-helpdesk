import mongoose from "mongoose";

const ChamadoSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    status: {type: String, enum: ['Aberto', 'Em andamento', 'Fechado'], default: 'Aberto', required: true},	
    dataAbertura: {type: Date, default: Date.now},
    dataFechamento: {type: Date},
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'name', required: true},
});



const Chamado = mongoose.models.Chamado || mongoose.model("Chamado", ChamadoSchema);

export default Chamado;
