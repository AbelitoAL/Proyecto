import { Router } from "express" 
import { getUbicacionByID, createUbicacion,deleteUbicacion,getUbicaciones,updateUbicacion, renderUpdateUbicacion, renderCreateUbicacion} from "../controllers/Ubicacion.CO.js";
import { logeado, notlogeado } from "../lib/privado.js";

const Ubicacion = Router();
Ubicacion.post('/crearUbicacion',logeado, createUbicacion)
Ubicacion.get('/crearUbicacion',logeado, renderCreateUbicacion)

Ubicacion.post('/eliminarUbicacion',logeado, deleteUbicacion)

Ubicacion.post('/renderActualizarUbicacion',logeado,renderUpdateUbicacion)
Ubicacion.post('/actualizarUbicacion',logeado,updateUbicacion)

Ubicacion.get('/ubicacion',logeado, getUbicaciones)

export default Ubicacion;