import { Router } from "express" 
import { AsigAct, Muser, RenderAs, RenderMuser, RenderformE, createE } from "../controllers/persona.CO.js";
import { logeado } from "../lib/privado.js";
import { DeleteE, Memp, RenderL,ModE, renderBit, reporte, renderBitF, RenderC, cambiarC, Renderde, deprecalculo, reporteMant, Renderbackup, RealizarB } from "../controllers/index.CO.js";
import { generarPDF, generarPDFMant } from "../controllers/reportes.controller.js";



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

Adm.get('/depre', Renderde)

Adm.post('/depre', deprecalculo)

Adm.get('/ReporteMant',logeado, reporteMant)

Adm.post('/generarpdfMant',logeado, generarPDFMant)

Adm.get('/backup',logeado,Renderbackup)

Adm.post('/BackUp',logeado,RealizarB)

export default Adm