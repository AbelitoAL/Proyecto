export const RenderMuser = (req, res) => {
    res.render('index.ejs');
  };

  export const Muser = async(req, res) => {
    try {
        const { nombre, usuario, direccion, ciudad, celular, email } = req.body;  
        const Npass = await helpers.encriptar(pass) 
        console.log(Npass)
        const response = await fetch(`http://localhost:5000/api/user/${req.user.ci}`, {
          method: 'PUT',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          body: JSON.stringify({ nombre, usuario, direccion, ciudad, celular, email }),
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer',
        });
        
        res.redirect('/home')
      } catch (error) {
        console.error(error);
        res.send('ERROR');
      }
  }; 

  export const RenderformE = (req, res) => {
    res.render('index.ejs');
  };

  export const createE = async(req, res) => {
    try {
        const { ci,nombre, id, celular, email, departamento,direccion,descripcion } = req.body;  
        const Npass = await helpers.encriptar(pass) 
        console.log(Npass)
        const response = await fetch(`http://localhost:5000/api/user/createE`, {
          method: 'POST',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          body: JSON.stringify({ ci,nombre, id, celular, email, departamento,direccion,descripcion }),
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer',
        });
        
        res.redirect('/home')
      } catch (error) {
        console.error(error);
        res.send('ERROR');
      }
  };