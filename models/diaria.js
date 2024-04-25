import mongoose from "mongoose";

const diaria = new mongoose.Schema(
    {
        codigo:{type:Number,require: true},
        encargado:{type:String,require:true},
        hora:{type:Number,require:true,},
        descripcion:{type:String,require:true,},
        programa:{type:String,require:true,},
    }
)

export default mongoose.model("Diaria", diaria);