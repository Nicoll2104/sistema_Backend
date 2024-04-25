import Diaria from "../models/diaria.js";

const httpDiaria = {
    getDiaria: async (req,res) =>{
        const diarias = await Diaria.find()
        res.json(diarias);
    },

    postDiaria: async (req,res)=>{
        try{
            const {codigo,encargado,hora,descripcion,programa}=req.body;
            const diarias = new Diaria ({codigo,encargado,hora,descripcion,programa});

            await diarias.save();
            res.json({mensaje:'El diario se agrego con exito', diarias })
        }catch(error){
            res.status(500).json({error:'Error interno del servidor'})
        }
    },

    putDiaria: async (req,res)=>{
        const {id}=req.params;
        const{codigo,encargado,hora,descripcion,programa}=req.body;

        try{
            const diarias = await Diaria.findByIdAndUpdate(id,{codigo,encargado,hora,descripcion,programa}, {new:true});

            if(diarias){
                return res.status(404).json({mensaje:'El diario no existe' })
            }
            res.json({mensaje: 'El diario actualizado con éxito',diarias })
        }catch(error){
            res.status(500).json({ error: 'Error interno del servidor'});
        }
    },

    deleteDiaria: async (req,res)=>{
        try{
            const {id} =req.params;
            const diarias = await Diaria.findByIdAndDelete(id);

            if(!diarias){
                return res.status(404).json({mensaje: 'El diario no existe' })
            }
            res.json({mensaje: 'El diario ha sido eliminado'})
        }catch(error){
            res.status(500).json({error: 'Ocurrió un error al intentar eliminar el diario' })
        }
    },

}
export default httpDiaria;