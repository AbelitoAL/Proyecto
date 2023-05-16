import { Router } from "express" 
import { AsigAct, Muser, RenderAs, RenderMuser, RenderformE, createE } from "../controllers/persona.CO.js";

const Adm = Router();

Adm.get('/Muser',RenderMuser)
Adm.post('/Muser',Muser)
Adm.get('/formEm', RenderformE)
Adm.post('/formEm', createE)
Adm.get('/formAs',RenderAs)
Adm.post('/formAs', AsigAct)

export default Adm