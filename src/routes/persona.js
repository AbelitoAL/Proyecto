import { Router } from "express" 
import { AsigAct, Muser, RenderAs, RenderMuser, RenderformE, createE } from "../controllers/persona.CO.js";
import { logeado } from "../lib/privado.js";
import { DeleteE, Memp, RenderL,ModE, renderBit, reporte, renderBitF, RenderC, cambiarC } from "../controllers/index.CO.js";
import { generarPDF } from "../controllers/reportes.controller.js";

const Adm = Router();

Adm.get('/Muser',logeado,RenderMuser)
Adm.post('/Muser',logeado,Muser)
Adm.get('/formEm',logeado, RenderformE)
Adm.post('/formEm', logeado,createE)
Adm.get('/formAs',logeado,RenderAs)
Adm.post('/formAs',logeado, AsigAct)

Adm.get('/listE',logeado, RenderL)

Adm.get('/CContra',logeado, RenderC)

Adm.post('/Mcontra',logeado, cambiarC)

Adm.get('/ReporteAct',logeado, reporte)

Adm.get('/bita',logeado, renderBit)

Adm.post('/buscar',logeado, renderBitF)

Adm.post('/DeleteE',logeado, DeleteE)

Adm.post('/Memp',logeado, Memp)

Adm.post('/ModEmp',logeado,ModE)

Adm.post('/generarpdf',logeado, generarPDF)


export default Adm