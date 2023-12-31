import mongoose from "mongoose";

const { Schema } = mongoose;

const ChamadoSchema = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    status: {type: String, required: true},	
    dataAbertura: {type: String, required: true},
});


const Chamado = mongoose.models.Chamado || mongoose.model("Chamado", ChamadoSchema);

export default Chamado;
