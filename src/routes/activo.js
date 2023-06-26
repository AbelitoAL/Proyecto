
import { Router } from "express" 
import { createActivo, createReserva, deleteActivo, getActivos, getReservas, renderCreateActivo, renderCreateReserva, renderUpdateActivo, renderUpdateReserva, updateActivo, updateReserva } from '../controllers/activo.CO.js';
import { logeado } from '../lib/privado.js';
import multer from 'multer'

const Acti = Router();
const storage = multer.memoryStorage();
const upload = multer({storage});

Acti.post('/crearActivo',upload.single('img'), createActivo)
Acti.get('/crearActivo', renderCreateActivo)

Acti.post('/eliminarActivo',logeado, deleteActivo)

Acti.post('/renderActualizarActivo',logeado,renderUpdateActivo)
Acti.post('/actualizarActivo',logeado,updateActivo)

Acti.get('/activo',logeado, getActivos)

Acti.get('/crearReserva', renderCreateReserva)
Acti.post('/crearReserva', createReserva)
Acti.get('/reserva', getReservas)
Acti.post('/renderActualizarReserva',renderUpdateReserva)
Acti.post('/actualizarReserva',updateReserva)

export default Acti