const db = require('./db/db');

function getNewsList(req, res, next) {
  db.any(`SELECT *
          FROM newslist`,
          [req.params.newsid])
          )
  .then(results => {
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

module.exports = { getNewsList };
