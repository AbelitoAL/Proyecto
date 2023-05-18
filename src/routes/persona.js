import { Router } from "express" 
import { AsigAct, Muser, RenderAs, RenderMuser, RenderformE, createE } from "../controllers/persona.CO.js";
import { logeado } from "../lib/privado.js";
import { DeleteE, Memp, RenderL,ModE } from "../controllers/index.CO.js";

const Adm = Router();

Adm.get('/Muser',logeado,RenderMuser)
Adm.post('/Muser',Muser)
Adm.get('/formEm',logeado, RenderformE)
Adm.post('/formEm', createE)
Adm.get('/formAs',logeado,RenderAs)
Adm.post('/formAs', AsigAct)

Adm.get('/listE', RenderL)

Adm.post('/DeleteE', DeleteE)

Adm.post('/Memp', Memp)

Adm.post('/ModEmp',ModE)


export default Adm