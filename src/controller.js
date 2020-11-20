// on importe nos données (les articles)
const articles = require('../data/moi.json');

const controller = {
  homePage: (req, res) => {
    res.render('index', { articles });
  },

  articlePage: (req, res) => {
    // trouver le bon article dans la liste
    const article = articles.filter( (a)=> a.id == req.params.id ).pop();
    // si on a trouvé, on affiche l'article
    if (article) {
      res.render('article', { article } );
    }
    // sinon, 404
    else {
      res.statusCode = 404;
      // on pourrait renvoyer une belle view 404 quand même...
      res.send('Not Found');
    }
  },

  categoryPage: (req, res) => {
    // trouver les bons articles dans la liste
    const filteredArticles = articles.filter( (a)=> a.category.toLowerCase() == req.params.name );
    res.render('index', {articles: filteredArticles} );
  }
};

module.exports = controller;