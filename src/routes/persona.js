import { Router } from "express" 
import { AsigAct, Muser, RenderAs, RenderMuser, RenderformE, createE } from "../controllers/persona.CO.js";
import { logeado } from "../lib/privado.js";
import { DeleteE, Memp, RenderL,ModE, renderBit, reporte, renderBitF } from "../controllers/index.CO.js";
import { generarPDF } from "../controllers/reportes.controller.js";

const Adm = Router();

Adm.get('/Muser',logeado,RenderMuser)
Adm.post('/Muser',Muser)
Adm.get('/formEm',logeado, RenderformE)
Adm.post('/formEm', createE)
Adm.get('/formAs',logeado,RenderAs)
Adm.post('/formAs', AsigAct)

Adm.get('/listE', RenderL)

Adm.get('/ReporteAct', reporte)

Adm.get('/bita', renderBit)

Adm.post('/buscar', renderBitF)

Adm.post('/DeleteE', DeleteE)

Adm.post('/Memp', Memp)

Adm.post('/ModEmp',ModE)

Adm.post('/generarpdf',  generarPDF)


export default Adm