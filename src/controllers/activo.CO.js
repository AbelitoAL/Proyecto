import fetch from "node-fetch";

export const createActivo = async (req, res) => {
    try {
        console.log(req.body);
        const nuevoActivo = {
            id: req.body.id,
            descripcion: req.body.descripcion,
            diaCompra: req.body.diaCompra,
            costo: req.body.costo,
            lugarCompra: req.body.lugarCompra,
            marca: req.body.marca,
            modelo: req.body.modelo,
            serial: req.body.serial,
            foto: req.body.foto
        };

        const response = await fetch('https://apisi2.up.railway.app/api/acti', {
            method: 'post',
            body: JSON.stringify(nuevoActivo),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = console.log(response);
        console.log(data);
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
        //const response = await fetch('http://127.0.0.1:8000/api/acti');
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

