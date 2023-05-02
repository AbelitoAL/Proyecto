import express from "express"
import fetch from "node-fetch";
import { dirname,join } from "path";
import Inicio from "./routes/inicio.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import {fileURLToPath} from 'url';


fetch("https://reqres.in/api/users?page=2")
    .then((respueta)=> {
        return respueta.json()
    }).then((resp) => {
        console.log(resp)
    })

const app = express()
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.urlencoded({ extended: true }))
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname, 'public')))

app.use(Inicio)

export default app;