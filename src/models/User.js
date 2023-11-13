import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: { type: String, required: true},
},
{ timestamps: true }
);

const modelName = mongoose.models.User || mongoose.model("User", UserSchema);

export default modelName;