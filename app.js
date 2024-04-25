import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import mongoose from "mongoose";
import diaria from './routes/diaria.js';
import diaria2 from './models/diaria2.js';


mongoose.connect(process.env.mongoDB)
  .then(() => console.log('Connected to MongoDB'));

const app = express()
app.use(express.json())
app.use(cors());
app.use("/api/diaria", diaria)
app.use("/api/diaria2", diaria2)

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})