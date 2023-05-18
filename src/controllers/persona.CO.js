import fetch from "node-fetch"

export const RenderMuser = (req, res) => {
    res.render('usuario.ejs');
  };

  export const Muser = async(req, res) => {
    try {
        const { nombre, usuario, direccion, ciudad, celular, email } = req.body        
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

  export const RenderformE = async(req, res) => {
    const ubicaciones = await fetch(`https://apisi2.up.railway.app/api/ubi`,{
      method: 'get', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
  }).then((respueta)=> {
      return respueta.json()
  }) 
    res.render('empleado.ejs',{ubicaciones});
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

  export const RenderAs = async(req, res) => {
    try {
      const activos = await fetch(`https://apisi2.up.railway.app/api/Gactivo`,{
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        }) 

        const empleados = await fetch(`https://apisi2.up.railway.app/api/emp`,{
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        }) 
        

    res.render('asignarA.ejs', {activos,empleados});
    } catch (error) {
      console.error(error)
    }
    
  };

  export const AsigAct = async(req, res) => {
    try {
        const { idActivo, cipersona,fecha } = req.body;          
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
  