import fetch from "node-fetch";

export const createMantenimiento = async (req, res) => {
    try {
        console.log(req.body);
        const nuevoMantenimiento = {
            idaf: req.body.idaf,
            titulo: req.body.mantenimiento,
            descripcion: req.body.descripcion,
            fechaInicio: req.body.fechaInicio,
            responsable: req.body.responsable,
            costo: req.body.costo,
            idestado: req.body.idestado
        };
        console.log(nuevoMantenimiento);
        const response = await fetch('https://apisi2.up.railway.app/api/mant', {
            method: 'post',
            body: JSON.stringify(nuevoMantenimiento),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = console.log(response);
        console.log(data);
        res.redirect('/mantenimiento');
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const renderCreateMantenimiento = async (req, res) => {
    res.render('crearMantenimiento')
}

export const getMantenimientos = async (req, res) => {
    try {
        //const response = await fetch('http://127.0.0.1:8000/api/acti');
        const response = await fetch('https://apisi2.up.railway.app/api/mant');
        const data = await response.json();
        res.render('verMantenimientos', { mantenimientos: data });
        console.log(data);
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const updateMantenimiento = async (req, res) => {
    try {
        const { idaf,titulo, descripcion, fechainicio, responsable,costo, idestado } = req.body;
        var fechaInicio=fechainicio;
        const response = await fetch(`https://apisi2.up.railway.app/api/mant/${req.body.id}`, {
            method: 'put',
            body: JSON.stringify({ idaf,titulo, descripcion, fechaInicio, responsable,costo, idestado }),
            headers: { 'Content-Type': 'application/json' }
        });

        res.redirect('/mantenimiento');
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const deleteMantenimiento = async (req, res) => {
    console.log(req.body);
    try {
        const response = await fetch(`https://apisi2.up.railway.app/api/mant/${req.body.id}`, {
            method: 'delete'
        });

        if (response.ok) {
            res.redirect('/mantenimiento');
        } else {
            console.error('Error al eliminar el mantenimiento');
            res.send('ERROR');
        }
    } catch (error) {
        console.error(error);
        res.send('ERROR');
    }
};

export const renderUpdateMantenimiento = async (req, res) => {
    console.log(req.body);
    const { id, idaf, titulo, descripcion, fechainicio, responsable,costo, idestado } = req.body;
    res.render('actualizarMantenimiento', { id, idaf, titulo, descripcion, fechainicio, responsable,costo, idestado })
};