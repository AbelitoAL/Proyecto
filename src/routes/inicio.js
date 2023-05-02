import { Router } from "express" 
import { slash } from "../controllers/index.CO.js";

const Inicio = Router();

Inicio.get('/', slash)


export default Inicio;