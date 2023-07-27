
import { Router } from "express" 
import { crearGarantia, createActivo, createReserva, deleteActivo, deleteG, getActivos, getReservas, renderCreateActivo, renderCreateReserva, renderUpdateActivo, renderUpdateReserva, updateActivo, updateReserva } from '../controllers/activo.CO.js';
import { logeado } from '../lib/privado.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import multer from 'multer'

const Acti = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));
export const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, join(__dirname,'../public/img'))
    },
    filename: (req,file,cb) =>{
        const ext = file.originalname.split('.').pop()
        cb(null,`${Date.now()}.${ext}`)
    }
})
const upload = multer({storage});

Acti.post('/crearActivo',upload.single('img'), createActivo)
Acti.get('/crearActivo', renderCreateActivo)

Acti.post('/eliminarActivo',logeado, deleteActivo)

Acti.post('/renderActualizarActivo',logeado,renderUpdateActivo)
Acti.post('/actualizarActivo',upload.single('img'),updateActivo)

Acti.get('/activo',logeado, getActivos)

Acti.get('/crearReserva', renderCreateReserva)
Acti.post('/crearReserva', createReserva)
Acti.get('/reserva', getReservas)
Acti.post('/renderActualizarReserva',renderUpdateReserva)
Acti.post('/actualizarReserva',updateReserva)

Acti.post('/Agarantia',crearGarantia)

Acti.post('/DeleteG',deleteG)

export default Acti