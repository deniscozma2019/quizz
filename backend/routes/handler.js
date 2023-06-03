const express = require('express');
const router = express.Router();
const db = require ('../db/questions.js');
router.get('/data',(req,res) => {
    const str = db.getCollection('questions').data;
    res.send(str);
});

router.get('/results',(req,res) => {
    const str = db.getCollection('results').data;
    res.send(str);
});
router.get('/results/:grade',(req,res) => {
    const grade = parseInt((req.params.grade).substring(1));
    const coll = db.getCollection('results');
    const colllength = coll.data.length;
    const unit =  100/colllength;
    const index = Math.ceil(grade/unit);
    const results = coll.findOne({'id': index});
    res.send(results);
});

router.post('/result', (req, res) => {
    res.end('n/a')
});


module.exports = router;




/*În primul rând, se importă modulul Express și se creează un router utilizând express.Router().

Acest router va gestiona rutele definite în aplicație.

Apoi, se definește o rută GET pentru a obține întrebările din baza de date.

Când se face o cerere GET la ruta /data, se extrage colecția de întrebări din baza de date folosind db.getCollection('questions').data și se trimite ca răspuns JSON utilizând res.send().

Următoarea rută GET este pentru a obține rezultatele posibile din baza de date.

Când se face o cerere GET la ruta /results, se extrage colecția de rezultate din baza de date folosind db.getCollection('results').data și se trimite ca răspuns JSON utilizând res.send().

Ruta GET /results/:grade este pentru a obține un rezultat specific în funcție de scorul obținut.

Se extrage scorul din parametrul rutei utilizând req.params.grade, se calculează indexul rezultatului în funcție de scor și se caută rezultatul corespunzător în colecția de rezultate. Rezultatul găsit este trimis ca răspuns JSON utilizând res.send().

Ruta POST /result este folosită pentru a înregistra un rezultat nou în baza de date.
 În exemplul furnizat, răspunsul este setat ca 'n/a', dar poți adăuga codul necesar pentru a înregistra rezultatul în colecția adecvată a bazei de date.

La final, se exportă router-ul utilizând module.exports = router, astfel încât să poată fi inclus în aplicația principală.*/