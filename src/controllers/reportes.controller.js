
import { response } from "express";
import fetch from "node-fetch";

export const generarPDF = async (req, res) => {
  const Inicio = req.body.Inicio
  const Fin = req.body.Fin
  let topdf = {}
  


    topdf.head = ['ID etiqueta de activo', 'Descripcion', 'Fecha de Compra', 'Comprado de', 'Costo'];
    const rows = await fetch(`https://apisi2.up.railway.app/api/acti/${Inicio}/${Fin}`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        }) 

    let mat = [];
    rows.forEach((element, index, array) => {
      mat.push([element.id, element.descripcion, element.diacompra, element.lugarcompra, element.costo]);
    });
    topdf.body = mat;
    topdf.file = 'Reporte de Activos.pdf';
    topdf.titulo = 'Reporte - Activos';

    const mensaje = "Se genero un reporte de activos"
    const culpable = req.user.ci
    const response = await fetch('https://apisi2.up.railway.app/bita/A', {
      method: 'post',
      body: JSON.stringify({ mensaje,culpable }),
      headers: { 'Content-Type': 'application/json' }
    });
    
  
  res.render('pdf.ejs', topdf);
};


export const generarPDFMant = async (req, res) => {
  const Inicio = req.body.Inicio
  const Fin = req.body.Fin
  let topdf = {}
  
 
    topdf.head = ['ID Mantenimiento', 'ID etiqueta de activo','Titulo', 'Descripcion', 'Fecha de Inicio','Responsable', 'Costo', 'ID del Estado'];
    const rows = await fetch(`https://apisi2.up.railway.app/api/mant/${Inicio}/${Fin}`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        }).then((respueta)=> {
            return respueta.json()
        }) 

    let mat = [];
    rows.forEach((element, index, array) => {
      mat.push([element.id,element.idaf,element.titulo, element.descripcion, element.fechainicio, element.responsable, element.costo, element.idestado]);
    });
    topdf.body = mat;
    topdf.file = 'Reporte de Mantenimientos.pdf';
    topdf.titulo = 'Reporte - Mantenimientos';

    const mensaje = "Se genero un reporte de Mantenimiento"
    const culpable = req.user.ci
    const response = await fetch('https://apisi2.up.railway.app/bita/A', {
      method: 'post',
      body: JSON.stringify({ mensaje,culpable }),
      headers: { 'Content-Type': 'application/json' }
    });

  
  res.render('pdfMant.ejs', topdf);
};