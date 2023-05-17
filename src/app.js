import express from "express"
import fetch from "node-fetch";
import { dirname,join } from "path";
import Inicio from "./routes/inicio.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import {fileURLToPath} from 'url';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';

import './lib/passport.js'
import Adm from "./routes/persona.js";
import Acti from "./routes/activo.js";
import helpers from './lib/helpers.js';

//como comunicarse con la api:
/*fetch("https://reqres.in/api/users?page=2")
    .then((respueta)=> {
        return respueta.json()
    }).then((resp) => {
        console.log(resp)
    })
*/
const app = express()

app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: false
}));

 
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.urlencoded({ extended: true }))
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(join(__dirname, 'public')))

app.use( async (req, res, next) => {
    
    
    app.locals.VerA = req.isAuthenticated();
    app.locals.VerAd = false;
    
    app.locals.VerP = (!req.isAuthenticated());
    if (req.user) {
        
                
    } else {// si no hay mandamos la variable vacia
        app.locals.user = req.user;
    }    
    next();
});

app.use(Inicio)
app.use(Adm)
app.use(Acti)

export default app;