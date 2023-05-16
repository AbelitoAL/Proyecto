import passport from 'passport';
import Strategy from 'passport-local';
import fetch from "node-fetch";
import helpers from './helpers.js';


//para iniciar sesion
passport.use('local.login', new Strategy.Strategy({
    usernameField: 'UsuI',
    passwordField: 'pass',
    passReqToCallback: true
}, async (req, UsuI, pass, done) => {
    try {
        
        const response = await fetch(`http://apisi2.up.railway.app/api/usuar/${UsuI}`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        })  

        
        if (UsuI === response[0].usuario && await helpers.descriptar(pass,response[0].contrasena)) { // ¿existe algun Usuario?
            return done(null, response[0])
        } else {
            return done(null, false, req.flash('denegado', 'usuario no existe'))
        }
    } catch {
        return done(null, false)
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.usuario);// mando los datos a las variables globales
});

passport.deserializeUser(async (user, done) => {
    try {
        const response = await fetch(`http://apisi2.up.railway.app/api/usuar/${user}`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        })  
        done(null, response[0]); // mando los datos a las variables globales
    } catch (e) {
        console.log(e)
    }
});