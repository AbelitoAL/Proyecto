import passport from 'passport';
import helpers from '../lib/helpers.js';
import fetch from "node-fetch";

export const slash = (req, res) => {
  res.render('index.ejs');
};


export const reporte = async(req, res) => {
  const response = await fetch(`https://apisi2.up.railway.app/api/acti`,{
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
}).then((respueta)=> {
    return respueta.json()
}) 
  res.render('reportes.ejs',{response});
};


export const renderBit = async(req, res) => {
  const response = await fetch(`https://apisi2.up.railway.app/api/bitac`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        }) 
  res.render('bitacora.ejs',{response});
};

export const renderBitF = async(req, res) => {
  const Inicio = req.body.Inicio
  const Fin = req.body.Fin
  const response = ""
  try {
    const response = await fetch(`https://apisi2.up.railway.app/api/bitac/${Inicio}/${Fin}`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        }) 
    
  res.render('bitacora.ejs',{response});
  } catch (error) {
    res.render('bitacora.ejs',{response});
  }
  
};

export const RenderL = async(req, res) => {
  const response = await fetch(`https://apisi2.up.railway.app/api/emp`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        })  
  res.render('listadoE.ejs',{response});
};

export const DeleteE = async(req, res) => {
  const response = await fetch(`https://apisi2.up.railway.app/api/user/${req.body.id}`, {
            method: 'delete'
        });
  res.redirect('/listE')
};

export const Memp = async(req, res) => {
  const ubicaciones = await fetch(`https://apisi2.up.railway.app/api/ubi`,{
      method: 'get', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
  }).then((respueta)=> {
      return respueta.json()
  }) 
  
  const { ci,nombre, id, celular, email,ciudad, departamento,direccion,descripcion } = req.body
  res.render('empleM.ejs',{ci,nombre, id, celular, email,ciudad, departamento,direccion,descripcion,ubicaciones})
};

export const ModE = async(req, res) => {
  const { ci,nombre, id, celular, email, departamento,direccion,descripcion } = req.body;  
  await fetch(`https://apisi2.up.railway.app/api/emp/${req.body.ciAnt}`,{
          method: 'put',         
          body: JSON.stringify({ ci,nombre, id, celular, email, departamento,direccion,descripcion }),
          headers: { 'Content-Type': 'application/json' },
          
        });   
        console.log("si sale")
  res.redirect('/formEm')
};

export const RenderG = (req, res) => {
  res.render('gestionarA.ejs');
};

export const home = (req, res) => {
  const usuario = req.user.nombre
  res.render('home.ejs',{usuario});
};

export const renderregister = async (req, res) => {
  try {
    const { nombre, email, ci, UsuI, pass } = req.body;
    const Npass = await helpers.encriptar(pass)
    const response = await fetch('https://apisi2.up.railway.app/api/createuser', {
      method: 'post',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      body: JSON.stringify({ nombre, email, ci, UsuI, Npass }),
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer'
    });
    res.redirect('/Login')
  } catch (error) {
    console.error(error);
    res.send('ERROR');
  }
}

export const RenderLogin = (req, res) => {
  res.render('Login.ejs')
}

export const SendDatos = (req, res) => {
  const Respuesta = req.body
  console.log(Respuesta)
  res.redirect('/home')
}

export const SendData = passport.authenticate('local.login', {
  successRedirect: '/home', //perfil
  failureRedirect: '/Login',
  failureFlash: true
});

export const cerrarSesion = async (req, res) => {
const culpable = req.user.ci
  const response = await fetch(`https://apisi2.up.railway.app/api/C`, {
          method: 'post',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          body: JSON.stringify({ culpable }),
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer',
        });
  req.logOut(async (err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

