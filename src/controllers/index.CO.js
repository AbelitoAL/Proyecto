import passport from 'passport';
import helpers from '../lib/helpers.js';
import fetch from "node-fetch";

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
    const response = await fetch('https://apisi2.up.railway.app/api/createuser', {
      method: 'post',
      body: JSON.stringify({ nombre,email,ci,UsuI,Npass })
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

