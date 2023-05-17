import fetch from "node-fetch";
export const RenderMuser = (req, res) => {
    res.render('usuario.ejs');
  };

  export const Muser = async(req, res) => {
    try {
        const { nombre, usuario, direccion, ciudad, celular, email } = req.body
        console.log(req.body)
        const response = await fetch(`https://apisi2.up.railway.app/api/user/${req.user.ci}`, {
          method: 'put',
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
        console.error(error)
        res.send('ERROR')
      }
  }; 

  export const RenderformE = (req, res) => {

    res.render('empleado.ejs');
  };

  export const createE = async(req, res) => {
    try {
        const { ci,nombre, id, celular, email, departamento,direccion,descripcion } = req.body;  
        
        const response = await fetch(`https://apisi2.up.railway.app/api/user/createE`, {
          method: 'post',
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

  export const RenderAs = (req, res) => {
    res.render('index.ejs');
  };

  export const AsigAct = async(req, res) => {
    try {
        const { idActivo, cipersona,fecha } = req.body;  
        const Npass = await helpers.encriptar(pass) 
        console.log(Npass)
        const response = await fetch(`https://apisi2.up.railway.app/api/user/createE`, {
          method: 'post',
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          body: JSON.stringify({ idActivo, cipersona,fecha }),
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
  