import multer from 'multer'
import { Router } from "express" 
import { createActivo } from '../controllers/activo.CO.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';


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

export default Acti