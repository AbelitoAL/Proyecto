import fetch from "node-fetch"

// Controlador para obtener todos los ubicaciones
export const getUbicaciones = async (req, res) => {
  try {
    const response = await fetch('https://apisi2.up.railway.app/api/ubi');
    const data = await response.json();
    res.render('verUbicaciones', { ubicacion: data })
  } catch (error) {
    console.error(error);
    res.send('ERROR');
  }
};


export const renderCreateUbicacion = async (req, res) => {
  res.render('crearUbicacion')
}
// Controlador para crear un nuevo ubicacion
export const createUbicacion = async (req, res) => {
  try {
    const { id, sitio, localizacion, departamento } = req.body;
    const response = await fetch('https://apisi2.up.railway.app/api/ubi', {
      method: 'post',
      body: JSON.stringify({ id, sitio, localizacion, departamento }),
      headers: { 'Content-Type': 'application/json' }
    });
    const mensaje = "Se creo el departamento: " + departamento
    const culpable = req.user.ci
    const respons = await fetch('https://apisi2.up.railway.app/bita/A', {
      method: 'post',
      body: JSON.stringify({ mensaje, culpable }),
      headers: { 'Content-Type': 'application/json' }
    });

    res.redirect('/ubicacion');
  } catch (error) {
    console.error(error);
    res.send('ERROR');
  }
};

// Controlador para obtener información de un ubicacion por su ID
export const getUbicacionByID = async (req, res) => {
  try {
    const response = await fetch(`https://mi-api.com/ubicaciones/${req.params.id}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.send('ERROR');
  }
};
export const renderUpdateUbicacion = async (req, res) => {
  const { id, sitio, localizacion, departamento } = req.body;
  res.render('actualizarUbicacion', { id, sitio, localizacion, departamento })
}
// Controlador para actualizar la información de un ubicacion
export const updateUbicacion = async (req, res) => {
  try {
    const { id, sitio, localizacion, departamento } = req.body;
    const response = await fetch(`https://apisi2.up.railway.app/api/ubi/${req.body.id}`, {
      method: 'put',
      body: JSON.stringify({ sitio, localizacion, departamento }),
      headers: { 'Content-Type': 'application/json' }
    });

    const mensaje = "Se Modifico datos de la siguiente ubicacion: " + req.body.id
    const culpable = req.user.ci
    const respons = await fetch('https://apisi2.up.railway.app/bita/A', {
      method: 'post',
      body: JSON.stringify({ mensaje, culpable }),
      headers: { 'Content-Type': 'application/json' }
    });
    res.redirect('/ubicacion')
  } catch (error) {
    console.error(error);
    res.send('ERROR');
  }
}

// Controlador para eliminar un ubicacion por su ID
export const deleteUbicacion = async (req, res) => {
  try {
    const response = await fetch(`https://apisi2.up.railway.app/api/ubi/${req.body.id}`, {
      method: 'delete'
    });
    const mensaje = "Se Elimino la Ubicacion con id: "+ req.body.id
    const culpable = req.user.ci
    const respons = await fetch('https://apisi2.up.railway.app/bita/A', {
      method: 'post',
      body: JSON.stringify({ mensaje, culpable }),
      headers: { 'Content-Type': 'application/json' }
    });
    res.redirect('/ubicacion')
  } catch (error) {
    console.error(error);
    res.send('ERROR');
  }
}