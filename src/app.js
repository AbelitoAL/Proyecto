import express from "express"
import fetch from "node-fetch";


fetch("https://reqres.in/api/users?page=2")
    .then((respueta)=> {
        return respueta.json()
    }).then((resp) => {
        console.log(resp)
    })

const app = express();

export default app;