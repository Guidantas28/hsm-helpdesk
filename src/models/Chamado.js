import mongoose from "mongoose";

const { Schema } = mongoose;

const ChamadoSchema = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    status: {type: String, required: true},	
    dataAbertura: {type: Date, default: Date.now},
    dataFechamento: {type: Date},
    usuario: {type: Schema.Types.ObjectId, ref: 'name'},
});


const Chamado = mongoose.models.Chamado || mongoose.model("Chamado", ChamadoSchema);

export default Chamado;
