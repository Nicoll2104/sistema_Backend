import mongoose from "mongoose";

const diaria2Schema = new mongoose.Schema({
    codigo: { type: Number, required: true },
    usuario: { type: String, required: true },
    contrasena: { type: String, required: true },
    imagen: { data: Buffer, contentType: String },
    descripcion: { type: String, required: true },
    programa:{type:String,require:true,},
});

export default mongoose.model("Diaria2", diaria2Schema);
