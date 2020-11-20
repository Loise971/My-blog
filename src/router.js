// on importe express et on instancie un router
const express = require('express');
const router = express.Router();

// on importe nos modules maison
const controller = require('./controller');

// Page d'accueil
router.get('/', controller.homePage);

//Page article
router.get('/article/:id', controller.articlePage);

//Page catégorie
router.get('/category/:name', controller.categoryPage);


module.exports = router;