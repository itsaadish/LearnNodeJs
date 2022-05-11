const User = require('../models/user');
exports.getLogin = (req, res, next) => {
    console.log(req.session);
    res.render('auth/login', {
      path: '/login',
      pageTitle: 'Login',
      isAuthenticated:req.session.isLoggedIn
    });
  };

  exports.postLogin = (req, res, next) => {
    User.findById('627a363cd106f7792e9f0014')
      .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
          console.log(err);
          res.redirect('/');
        });
      })
      .catch(err => console.log(err));
  };

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
    });
  };