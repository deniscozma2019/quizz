const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")), routesHandler)
const PORT = process.env.PORT || 4500;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}.`);
});


/*Acest cod utilizează modulele express, body-parser și path pentru a crea și configura serverul Express.
 Se utilizează middleware-ul body-parser pentru a analiza corpul cererilor
  HTTP și middleware-ul express.static pentru a servi fișiere statice din directorul "public".

De asemenea, se utilizează routesHandler pentru a trata rutele aplicației.

Serverul este pornit pe portul specificat în variabila PORT. Dacă nu este specificată nicio valoare pentru PORT, se utilizează portul 4500.*/
