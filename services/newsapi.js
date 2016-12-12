const fetch = require('node-fetch');
const API_URL = 'https://newsapi.org/v1/sources?language=en&category=technology';
const API_KEY = process.env.NEWS_API_KEY;

function findTechNews(req, res, next) {
  fetch(`${API_URL}&sortBy=latest&apiKey=${API_KEY}`)
  .then(r => r.json())
  .then((news) => {
    console.log(news);
    res.news = news;
    next();
  })
  .catch((err) =>{
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { findTechNews };
