import Diaria2 from "../models/diaria2.js";

const httpDiaria2 = {
    getDiaria: async (req,res) =>{
        try {
            console.log('a');
            const diarias = await Diaria2.find()
            console.log(diarias);
        res.json(diarias);
        } catch (error) {
            console.log(error);
        }
        
    },

    postDiaria: async (req,res)=>{
        try{
            const {codigo,usuario,contrasena,imagen,descripcion,programa}=req.body;
            const diarias = new Diaria2 ({codigo,usuario,contrasena,imagen,descripcion,programa});

            await diarias.save();
            res.json({mensaje:'El diario se agrego con exito', diarias })
        }catch(error){
            res.status(500).json({error:'Error interno del servidor'})
        }
    },

    putDiaria: async (req,res)=>{
        const {id}=req.params;
        const{codigo,usuario,contrasena,imagen,descripcion,programa}=req.body;

        try{
            const diarias = await Diaria2.findByIdAndUpdate(id,{codigo,usuario,contrasena,imagen,descripcion,programa}, {new:true});

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
            const diarias = await Diaria2.findByIdAndDelete(id);

            if(!diarias){
                return res.status(404).json({mensaje: 'El diario no existe' })
            }
            res.json({mensaje: 'El diario ha sido eliminado'})
        }catch(error){
            res.status(500).json({error: 'Ocurrió un error al intentar eliminar el diario' })
        }
    },

}
export default httpDiaria2;