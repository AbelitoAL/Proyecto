import { Router } from "express" 
import { slash,renderregister} from "../controllers/index.CO.js";

const Inicio = Router();

Inicio.get('/', slash)

Inicio.get('/registrar', renderregister)


export default Inicio;