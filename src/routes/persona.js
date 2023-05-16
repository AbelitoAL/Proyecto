import { Router } from "express" 
import { Muser, RenderMuser, RenderformE, createE } from "../controllers/persona.CO.js";

const Adm = Router();

Adm.get('/Muser',RenderMuser)
Adm.post('/Muser',Muser)
Adm.get('/formEm', RenderformE)
Adm.post('/formEm', createE)

export default Adm