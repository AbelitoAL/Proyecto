import passport from 'passport';
import Strategy from 'passport-local';


//para iniciar sesion
passport.use('local.login', new Strategy.Strategy({
    usernameField: 'UsuI',
    passwordField: 'pass',
    passReqToCallback: true
}, async (req, UsuI, pass, done) => {
    try {        
        if (UsuI === "fabio" && pass === "123456789") { // ¿existe algun Usuario?
            return done(null, {id: 1 , name:"fabio"})
        } else {
            return done(null, false, req.flash('denegado', 'usuario no existe'))
        }
    } catch {
        return done(null, false)
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id);// mando los datos a las variables globales
});

passport.deserializeUser(async (user, done) => {
    try {        
        done(null, {id: 1 , name: "fabio"}); // mando los datos a las variables globales
    } catch (e) {
        console.log(e)
    }
});