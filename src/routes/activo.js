import multer from 'multer'
import { Router } from "express" 
import { createActivo, deleteActivo, getActivos, renderCreateActivo, renderUpdateActivo, updateActivo } from '../controllers/activo.CO.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import { logeado } from '../lib/privado.js';


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

const upload = multer({storage})


Acti.post('/formP', upload.single("img"), createActivo)

Acti.post('/crearActivo',logeado, createActivo)
Acti.get('/crearActivo',logeado, renderCreateActivo)

Acti.post('/eliminarActivo',logeado, deleteActivo)

Acti.post('/renderActualizarActivo',logeado,renderUpdateActivo)
Acti.post('/actualizarActivo',logeado,updateActivo)

Acti.get('/activo',logeado, getActivos)

export default Acti