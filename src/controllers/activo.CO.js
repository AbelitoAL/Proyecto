import fetch from "node-fetch";
import * as BlobUtil from 'blob-util';



export const createActivo = async (req, res) => {
    try {

        const nuevoActivo = new FormData();
        nuevoActivo.append('id', req.body.id);
        nuevoActivo.append('descripcion', req.body.descripcion);
        nuevoActivo.append('diaCompra', req.body.diaCompra);
        nuevoActivo.append('costo', req.body.costo);
        nuevoActivo.append('lugarCompra', req.body.lugarCompra);
        nuevoActivo.append('marca', req.body.marca);
        nuevoActivo.append('modelo', req.body.modelo);
        nuevoActivo.append('serial', req.body.serial);
        nuevoActivo.append('img', req.file);

        const response = await fetch('http://localhost:5000/api/acti', {
            method: 'POST',
            body: nuevoActivo,
            headers: {
                'Content-Type': 'multipart/form-data' // Asegúrate de usar el Content-Type correcto
              }
        });

        res.redirect('/crearActivo');
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};



export const renderCreateActivo = async (req, res) => {
    res.render('crearActivo')
}

export const getActivos = async (req, res) => {
    try {
        const response = await fetch('https://apisi2.up.railway.app/api/acti');
        const data = await response.json();
        res.render('verActivos', { activos: data });
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const getUbiActivo = async (req, res) => {
    try {
        const response = await fetch(`https://mi-api.com/activos-fijos/${req.params.id}/ubicacion`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const getGarActivo = async (req, res) => {
    try {
        const response = await fetch(`https://mi-api.com/activos-fijos/${req.params.id}/garantia`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const getActivobyID = async (req, res) => {
    try {
        const response = await fetch(`https://mi-api.com/activos-fijos/${req.params.id}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const getActivobySerial = async (req, res) => {
    try {
        const response = await fetch(`https://mi-api.com/activos-fijos/serial/${req.params.serial}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const renderUpdateActivo = async (req, res) => {
    console.log(req.body);
    const { id, descripcion, diaCompra, costo, lugarCompra, marca, modelo, serial, foto } = req.body;
    res.render('actualizarActivo', { id, descripcion, diaCompra, costo, lugarCompra, marca, modelo, serial, foto })
};

export const updateActivo = async (req, res) => {
    try {
        const { id, descripcion, diaCompra, costo, lugarCompra, marca, modelo, serial, foto } = req.body;
        const response = await fetch(`https://apisi2.up.railway.app/api/acti/${req.body.id}`, {
            method: 'put',
            body: JSON.stringify({ descripcion, diaCompra, costo, lugarCompra, marca, modelo, serial, foto }),
            headers: { 'Content-Type': 'application/json' }
        });

        const mensaje = "Se genero Actualizo el activo: " + req.body.id + " con nombre: " + descripcion
        const culpable = req.user.ci
        const respons = await fetch('https://apisi2.up.railway.app/bita/A', {
            method: 'post',
            body: JSON.stringify({ mensaje, culpable }),
            headers: { 'Content-Type': 'application/json' }
        });

        res.redirect('/activo');
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const deleteActivo = async (req, res) => {
    console.log(req.body);
    try {
        const response = await fetch(`https://apisi2.up.railway.app/api/acti/${req.body.id}`, {
            method: 'delete'
        });

        if (response.ok) {
            const mensaje = "Se Elimino el Activo: " + req.body.id
            const culpable = req.user.ci
            const response = await fetch('https://apisi2.up.railway.app/bita/A', {
                method: 'post',
                body: JSON.stringify({ mensaje, culpable }),
                headers: { 'Content-Type': 'application/json' }
            });
            res.redirect('/activo');
        } else {
            console.error('Error al eliminar el activo');
            res.send('ERROR');
        }
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};


export const createReserva = async (req, res) => {
    try {
        const nuevaReserva = {
            idActivoFijo: req.body.idActivoFijo,
            ciPersona: req.body.ciPersona,
            fecha: req.body.fecha,
            descripcion: req.body.descripcion,
        };

        const response = await fetch('https://apisi2.up.railway.app/api/acti/res', {
            method: 'post',
            body: JSON.stringify(nuevaReserva),
            headers: { 'Content-Type': 'application/json' }
        });

        const mensaje = "Se Realizo una Reserva para el Activo: " + idActivoFijo + "para la siguiente Fecha: " + req.body.fecha
        const culpable = req.user.ci
        const respons = await fetch('https://apisi2.up.railway.app/bita/A', {
            method: 'post',
            body: JSON.stringify({ mensaje, culpable }),
            headers: { 'Content-Type': 'application/json' }
        });

        res.redirect('/reserva');
    } catch (error) {
        console.error(error);
        res.send('ERROR SSS');
    }
};

export const renderCreateReserva = async (req, res) => {
    try {
        const response = await fetch('https://apisi2.up.railway.app/api/acti');
        const data = await response.json();

        const clientes = await fetch(`https://apisi2.up.railway.app/api/user`, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((dataClientes) => {
            return dataClientes.json()
        });
        const empleados = await fetch(`https://apisi2.up.railway.app/api/emp`, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((dataEmpleados) => {
            return dataEmpleados.json()
        });
        const tipoPersona = ['cliente', 'empleado'];

        //   res.render('crearReserva', { activosFijos: data, clientes: dataClientes, empleados: dataEmpleados, tipoPersona: tipoPersona});
        res.render('crearReserva', { activosFijos: data, clientes, empleados, tipoPersona: tipoPersona })
        // res.render('crearReserva', { activosFijos: data, personas: personas, tipoPersona: tipoPersona });
    } catch (error) {
        console.error(error);
        res.send('ERROR SS');
    }
};

export const getReservas = async (req, res) => {
    try {
        const response = await fetch('https://apisi2.up.railway.app/api/res');
        const data = await response.json();
        res.render('verReservas', { reservas: data });
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const renderUpdateReserva = async (req, res) => {
    const { id, idactivofijo, cipersona, fecha, descripcion } = req.body;
    res.render('actualizarReserva', { id, idactivofijo, cipersona, fecha, descripcion })
};

export const updateReserva = async (req, res) => {
    try {
        const { idactivofijo, cipersona, fecha, descripcion } = req.body;
        const response = await fetch(`https://apisi2.up.railway.app/api/res/${req.body.id}`, {
            method: 'put',
            body: JSON.stringify({ idactivofijo, cipersona, fecha, descripcion }),
            headers: { 'Content-Type': 'application/json' }
        });
        const mensaje = "Se Actualizo el Activo: " + idactivofijo
        const culpable = req.user.ci
        const respons = await fetch('https://apisi2.up.railway.app/bita/A', {
            method: 'post',
            body: JSON.stringify({ mensaje, culpable }),
            headers: { 'Content-Type': 'application/json' }
        });

        res.redirect('/reserva');
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

