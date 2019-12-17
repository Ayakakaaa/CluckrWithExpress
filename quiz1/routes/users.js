var express = require('express');
var router = express.Router();
const cookie = require('cookie-parser');

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // a week in milliseconds

router.get('/login', function(req, res) {
  res.render("users/login");
});

router.post('/login', function(req, res) {
  if (!req.body.username) {
    res.redirect("/users/login");
  }
  else {
    const cookieName = "cluckr";
    res.cookie(cookieName, {
      maxAge: COOKIE_MAX_AGE,
      username: req.body.username
    });

    res.redirect("/clucks/new");
  }
});

router.get('/logout', function(req, res) {
  const cookieName = "cluckr";
  res.cookie(cookieName, {
    maxAge: COOKIE_MAX_AGE,
    username: undefined
  });

  res.redirect("/users/login");
});

module.exports = router;
