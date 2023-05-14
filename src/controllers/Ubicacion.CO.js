// Controlador para obtener todos los ubicaciones
export const getUbicaciones = async (req, res) => {
    try {
      const response = await fetch('https://mi-api.com/ubicaciones');
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.send('ERROR');
    }
  };
  
  // Controlador para crear un nuevo ubicacion
  export const createUbicacion = async (req, res) => {
    try {
      const { sitio, localizacion, departamento } = req.body;
      const response = await fetch('https://mi-api.com/ubicaciones', {
        method: 'POST',
        body: JSON.stringify({ sitio, localizacion, departamento }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      console.log(data);
      res.send('ubicacion registrada');
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
  
  // Controlador para actualizar la información de un ubicacion
  export const updateUbicacion = async (req, res) => {
    try {
      const { sitio, localizacion, departamento } = req.body;
      const response = await fetch(`https://mi-api.com/ubicaciones/${req.params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ sitio, localizacion, departamento }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      console.log(data);
      res.send(`ubicacion ${req.params.id} actualizado`);
    } catch (error) {
      console.error(error);
      res.send('ERROR');
    }
  };
  
  // Controlador para eliminar un ubicacion por su ID
  export const deleteUbicacion = async (req, res) => {
    try {
      const response = await fetch(`https://mi-api.com/ubicaciones/${req.params.id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
      res.send(`ubicacion ${req.params.id} eliminado`);
    } catch (error) {
      console.error(error);
      res.send('ERROR');
    }
  };