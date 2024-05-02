import { Router } from "express";
import { check } from "express-validator";
import { validarcampos } from "../middlewares/validarcampos.js";
import httpDiaria2 from "../controllers/diaria2.js";

const router = Router();

router.get("/ver",httpDiaria2.getDiaria);

router.post("/agregar",[
    check("codigo","El codigo es obligatorio").not().isEmpty(),
    check("usuario","El usuario es obligatorio").not().isEmpty(),
    check("contrasena","La contraseña es obligatoria").not().isEmpty(),
    check("imagen", "La imagen es obligatoria").notEmpty(),
    check("descripcion","La descripcion es obligatoria").not().isEmpty(),
    check("programa","El programa es obligatorio"),
    validarcampos
], httpDiaria2.postDiaria)

router.put("/modificar",[
    check("codigo","El codigo es obligatorio").not().isEmpty(),
    check("usuario","El usuario es obligatorio").not().isEmpty(),
    check("contrasena","La contraseña es obligatoria").not().isEmpty(),
    check("imagen", "La imagen es obligatoria").notEmpty(),
    check("descripcion","La descripcion es obligatoria").not().isEmpty(),
    check("programa","El programa es obligatorio"),
    validarcampos
], httpDiaria2.putDiaria)

router.delete("/eliminar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httpDiaria2.deleteDiaria);

export default router;