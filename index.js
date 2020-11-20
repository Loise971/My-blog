// Importation du module express
const express = require('express');
// Importation de mon router custom
const router = require('./src/router');
// On instancie une application avec express
const app = express();

//importation de la liste d'article
const dataList = require('./data/moi.json');

// Quelques réglages : 
//      - Le moteur de rendu des vues
app.set('view engine', 'ejs');
//      - Le dossier qui contient les vues EJS
app.set('views', 'views');

//      - "static", pour les fichiers situées dans le dossier public
app.use(express.static('public'));


// Ici de range la variable gameList dans l'objet locals de manière globale. Comme je ne suis pas dans une route ou une vue particulière, alors gameList, sera disponible partout
app.locals.dataList = dataList;


// Déclarer mes routes depuis mon router custom
app.use(router);

// Lancement de l'application
app.listen(3500, () => {
    console.log("Le serveur est en écoute sur l'url http://localhost:3500");
})