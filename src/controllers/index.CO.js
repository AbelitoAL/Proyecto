import passport from 'passport';

export const slash = (req, res) => {
    res.render('index.ejs');
  };

  export const RenderG = (req, res) => {
    res.render('gestionarA.ejs');
  };

  export const home = (req, res) => {
    res.render('home.ejs');
  };

export const renderregister = (req,res) =>{
  res.render('formulario.ejs')
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

