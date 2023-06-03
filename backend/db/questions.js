const loki = require('lokijs');
const db = new loki('db.json');
db.addCollection('questions').insert([
    {
        "id": 1,
        "question":"1. Ce este HTML?:" ,
        "answers": [
        {"id": "q1a1", "answer": ' a. HyperText Markup Language',  "result" :  "correct"},
        {"id": "q1a2", "answer": 'b.High Technical Markup Language', "result" :  "correct"},
        {"id": "q1a3", "answer": 'c.Hyperlink and Text Markup Language', "result" :  "wrong"},
        {"id": "q1a4", "answer": 'd. Home Tool Markup Language', "result" :  "wrong"}
        ]
    },
    {
        "id": 2, 
        "question": "2. Care dintre următoarele nu este un limbaj de programare?" ,
        "answers": [
        {"id": "q2a1", "answer": "a) Python", "result" :  "wrong"},
        {"id": "q2a2", "answer": 'b) Java', "result" :  "wrong"},
        {"id": "q2a3", "answer": 'c) CSS', "result" :  "correct"} ,
        {"id": "q2a4", "answer": 'd) JavaScript', "result" :  "wrong"}
        ]
    },
    {
        "id": 3, 
        "question": "3. Ce este un algoritm?" ,
        "answers": [
        {"id": "q3a1", "answer": "d) Un tip de bază de date",  "result" :  "wrong"},
        {"id": "q3a2", "answer": 'b) Un limbaj de programare',  "result" :  "wrong"},
        {"id": "q3a3", "answer": 'c) Un sistem de operare',  "result" :  "wrong"},
        {"id": "q3a4", "answer": 'd) Un set de instrucțiuni pentru rezolvarea unei probleme',  "result" :  "correct"}
        ]  
    },
    {
        "id": 4, 
        "question":'4. Ce este o buclă "for" în programare?' ,
        "answers": [
        {"id": "q4a1", "answer": "a) Un tip de date", "result" :  "wrong"},
        {"id": "q4a2", "answer": 'b) O instrucțiune de control a fluxului', "result" :  "correct"},
        {"id": "q4a3", "answer": 'c) O formă de criptografie', "result" :  "wrong"},
        {"id": "q4a4", "answer": 'd) Un mod de a defini o funcție', "result" :  "wrong"},
        ]  
    },
    {
        "id": 5,
        "question":'5. Ce este un array în limbajul JavaScript?' ,
        "answers": [
        {"id": "q5a1", "answer": "a) Un tip de date pentru stocarea mai multor valori", "result" :  "correct"},
        {"id": "q5a2", "answer": 'b) Un mod de a defini o funcție', "result" :  "wrong"},
        {"id": "q5a3", "answer": 'с) O instrucțiune de control a fluxului', "result" :  "wrong"},
        {"id": "q5a4", "answer": 'd) Un tip de bază de date', "result" :  "wrong"}
        ]
    },
    {
        "id": 6,
        "question":'6. Ce este Git?' ,
        "answers": [
            {"id": "q6a1", "answer": "a)Un limbaj de programare", "result" :  "wrong"},
            {"id": "q6a2", "answer": 'b)Un sistem de control al versiunilor',  "result" :  "correct"},
            {"id": "q6a3", "answer": 'c)Un limbaj de programare', "result" :  "wrong"},
            {"id": "q6a4", "answer": 'd)Un sistem de operare', "result" :  "wrong"}
        ]
    },
    {
        "id": 7,
        "question":'7. Ce este MySQL?' ,
        "answers": [
            {"id": "q7a1", "answer": "a)Un limbaj de programare", "result" :  "wrong"},
            {"id": "q7a2", "answer": 'b) Un sistem de operare',  "result" :  "wrong"},
            {"id": "q7a3", "answer": 'c) Un editor de texte', "result" :  "wrong"},
            {"id": "q7a4", "answer": 'd) Un sistem de gestiune a bazelor de date', "result" :  "correct"}
        ]
    },
    {
        "id": 8,
        "question":'8. Ce este Python?' ,
        "answers": [
            {"id": "q8a1", "answer": "a)Un limbaj de programare", "result" :  "correct"},
            {"id": "q8a2", "answer": 'b) Un sistem de operare',  "result" :  "wrong"},
            {"id": "q8a3", "answer": 'c) Un editor de texte', "result" :  "wrong"},
            {"id": "q8a4", "answer": 'd) Un sistem de gestiune a bazelor de date', "result" :  "wrong"}
        ]
    },
    {
        "id": 9,
        "question":'9. Ce este Java?' ,
        "answers": [
            {"id": "q9a1", "answer": "a)Un limbaj de programare", "result" :  "correct"},
            {"id": "q9a2", "answer": 'b) Un sistem de operare',  "result" :  "wrong"},
            {"id": "q9a3", "answer": 'c) Un editor de texte', "result" :  "wrong"},
            {"id": "q9a4", "answer": 'd) Un sistem de gestiune a bazelor de date', "result" :  "wrong"}
        ]
    },
    {
        "id": 10,
        "question":'10. Ce este Php' ,
        "answers": [
            {"id": "q10a1", "answer": "a)Un limbaj de programare", "result" :  "correct"},
            {"id": "q10a2", "answer": 'b) Un sistem de operare',  "result" :  "wrong"},
            {"id": "q10a3", "answer": 'c) Un editor de texte', "result" :  "wrong"},
            {"id": "q10a4", "answer": 'd) Un sistem de gestiune a bazelor de date', "result" :  "wrong"}
        ]
    },
    {
        "id": 11,
        "question":'11. Ce este API?' ,
        "answers": [
            {"id": "q11a1", "answer": "a)Un limbaj de programare", "result" :  "wrong"},
            {"id": "q11a2", "answer": 'b) Un sistem de operare',  "result" :  "wrong"},
            {"id": "q11a3", "answer": 'c) Un editor de texte', "result" :  "wrong"},
            {"id": "q11a4", "answer": 'd) Application Programming Interface', "result" :  "correct"}
        ]
    },







]);

db.addCollection('results').insert([
    {
        "id": 1, 
        "message":'Rău apucăte de carte :q'
        
    },
    {
        "id": 2, 
        "message":'Nu e rău dar, fii mai atent data viitoare! '
        
    },
    {
        "id": 3, 
        "message":'Bravo dar poți mai bine :)'
        
    },
    {
        "id": 4, 
        "message":'Wow! Felicitări :)'
        
    }


]);
db.addCollection('answered');

db.saveDatabase();


module.exports = db;


/*se folosește pachetul lokijs pentru a crea o bază de date în memorie și pentru a insera colecții de întrebări, rezultate și răspunsuri.

În codul de mai sus, se creează o bază de date db utilizând new loki('db.json'), unde 'db.json' reprezintă numele fișierului în care se va salva baza de date.

Se adaugă o colecție numită 'questions' în baza de date db folosind db.addCollection('questions').

Se inserează întrebările în această colecție utilizând metoda insert() și un array de obiecte întrebare, fiecare obiect reprezentând o întrebare cu un ID, textul întrebării și un array de răspunsuri.

De asemenea, se adaugă o colecție numită 'results' în baza de date db utilizând db.addCollection('results').

Se inserează rezultatele posibile în această colecție, fiecare rezultat fiind reprezentat de un obiect cu un ID și un mesaj corespunzător.

Se adaugă și o colecție numită 'answered' în baza de date db utilizând db.addCollection('answered').

Apelul db.saveDatabase() salvează baza de date pe disc, în fișierul specificat în constructorul loki.

În cele din urmă, se exportă baza de date db folosind module.exports = db, astfel încât să poată fi utilizată în alte module ale aplicației */
