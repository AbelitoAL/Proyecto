import { Router } from "express" 
import { getUbicacionByID, createUbicacion,deleteUbicacion,getUbicaciones,updateUbicacion, renderUpdateUbicacion, renderCreateUbicacion} from "../controllers/Ubicacion.CO.js";
import { logeado, notlogeado } from "../lib/privado.js";

const Ubicacion = Router();
Ubicacion.post('/crearUbicacion', createUbicacion)
Ubicacion.get('/crearUbicacion', renderCreateUbicacion)

Ubicacion.post('/eliminarUbicacion', deleteUbicacion)

Ubicacion.post('/renderActualizarUbicacion',renderUpdateUbicacion)
Ubicacion.post('/actualizarUbicacion',updateUbicacion)

Ubicacion.get('/ubicacion', getUbicaciones)

export default Ubicacion;