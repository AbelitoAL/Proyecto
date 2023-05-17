import fetch from "node-fetch";
export const createActivo = async (req, res) => {
    try {
        const nuevoActivo = {
            descripcion: req.body.descripcion,
            diaCompra: req.body.diaCompra,
            costo: req.body.costo,
            lugarCompra: req.body.lugarCompra,
            marca: req.body.marca,
            modelo: req.body.modelo,
            serial: req.body.serial,
            foto: req.body.foto
        };

        const response = await fetch('https://mi-api.com/activos-fijos', {
            method: 'POST',
            body: JSON.stringify(nuevoActivo),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        console.log(data);
        res.send('Activo registrado');
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const getActivos = async (req, res) => {
    try {
        const response = await fetch('https://mi-api.com/activos-fijos');
        const data = await response.json();
        res.status(200).json(data);
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

export const updateActivo = async (req, res) => {
    try {
        const { descripcion, diaCompra, costo, lugarCompra, marca, modelo, serial, foto } = req.body;
        const response = await fetch(`https://mi-api.com/activos-fijos/${req.params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ descripcion, diaCompra, costo, lugarCompra, marca, modelo, serial, foto }),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        console.log(data);
        res.send(`Activo ${req.params.id} actualizado`);
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const deleteActivo = async (req, res) => {
    try {
        const response = await fetch(`https://mi-api.com/activos-fijos/${req.params.id}`, {
            method: 'DELETE'
        });

        const data = await response.json();
        console.log(data);
        res.send(`Activo ${req.params.id} eliminado`);
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};