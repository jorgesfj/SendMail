import 'dotenv/config';
import express from 'express';
import mailController from './app/controllers/mailController';
import got from 'got';
import axios from 'axios';

const app = express();

app.use(express.json());


app.post("/email", mailController.sendMail);

async function getProducts(){
    console.log("foi");
    try {
        console.log("foi");
        const response = await got("https://apiexamples.vtexcommercestable.com.br/api/catalog_system/pub/products/search", {json: true});
        console.log(response.body);
    }catch (error) {
        console.log(error.response.body);
    }
}

app.listen(3333, () =>{
    console.log("Server running on localhost:3333");
});