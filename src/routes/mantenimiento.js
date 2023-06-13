import multer from 'multer'
import { Router } from "express" 
import {  createMantenimiento,renderCreateMantenimiento, getMantenimientos, deleteMantenimiento, updateMantenimiento, renderUpdateMantenimiento} from '../controllers/mantenimiento.CO.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const Mant = Router();

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

const upload = multer({storage})

Mant.post('/crearMantenimiento', createMantenimiento)
Mant.get('/crearMantenimiento', renderCreateMantenimiento)
Mant.get('/mantenimiento', getMantenimientos)

Mant.post('/eliminarMantenimiento', deleteMantenimiento)

Mant.post('/renderActualizarMantenimiento',renderUpdateMantenimiento)
Mant.post('/actualizarMantenimiento',updateMantenimiento)
export default Mant