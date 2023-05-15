import { Router } from "express" 
import { slash,renderregister,RenderLogin, SendData, cerrarSesion, home, RenderG, SendDatos} from "../controllers/index.CO.js";
import { logeado, notlogeado } from "../lib/privado.js";

const Inicio = Router();

Inicio.get('/', slash)

Inicio.get('/home', logeado,home)

Inicio.post('/Register', renderregister)

Inicio.get('/Login',RenderLogin)

Inicio.post('/Login',SendData)

Inicio.get('/cerrar', cerrarSesion);

Inicio.get('/GestionarA',logeado,RenderG)

Inicio.post('/GestionarA',SendDatos)


export default Inicio;