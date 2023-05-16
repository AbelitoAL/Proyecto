import passport from 'passport';
import helpers from '../lib/helpers.js';

export const slash = (req, res) => {
    res.render('index.ejs');
  };

  export const RenderG = (req, res) => {
    res.render('gestionarA.ejs');
  };

  export const home = (req, res) => {
    res.render('home.ejs');
  };

export const renderregister = async(req,res) => {
  try {
    const { nombre,email,ci,UsuI,pass } = req.body;  
    const Npass = await helpers.encriptar(pass) 
    console.log(Npass)
    const response = await fetch('http://apisi2-production.up.railway.app/api/createuser', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      body: JSON.stringify({ nombre,email,ci,UsuI,Npass }),
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
    });
    
    res.redirect('/Login')
  } catch (error) {
    console.error(error);
    res.send('ERROR');
  }  
}

export const RenderLogin = (req,res) =>{
  res.render('Login.ejs')
}

export const SendDatos = (req,res) =>{
  const Respuesta = req.body
  console.log(Respuesta)
  res.redirect('/home')
}

export const SendData = passport.authenticate('local.login', {
  successRedirect: '/home', //perfil
  failureRedirect: '/Login',
  failureFlash: true
});

export const cerrarSesion = async(req, res) => {
  req.logOut(async(err) => {
    if (err) { 
      return next(err); 
    }    
    res.redirect('/');
  });
};

