import { Router } from "express";
import { check } from "express-validator";
import { validarcampos } from "../middlewares/validarcampos.js";
import httpDiaria from "../controllers/diaria.js";

const router = Router();

router.get("/ver",httpDiaria.getDiaria);

router.post("/agregar",[
    check("codigo","El codigo es obligatorio").not().isEmpty(),
    check("encargado","El encargado es obligatorio").not().isEmpty(),
    check("hora","La hora es obligatoria").not().isEmpty(),
    check("descripcion","La descripcion es obligatoria").not().isEmpty(),
    check("programa","El programa es obligatorio"),
    validarcampos
], httpDiaria.postDiaria)

router.put("/modificar",[
    check("codigo","El codigo es obligatorio").not().isEmpty(),
    check("encargado","El encargado es obligatorio").not().isEmpty(),
    check("hora","La hora es obligatoria").not().isEmpty(),
    check("descripcion","La descripcion es obligatoria").not().isEmpty(),
    check("programa","El programa es obligatorio"),
    validarcampos
], httpDiaria.putDiaria)

router.delete("/eliminar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httpDiaria.deleteDiaria);

export default router;