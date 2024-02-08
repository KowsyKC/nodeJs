exports.get404 = (req, res) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
};

  exports.get500 = (error, req, res, next) => {
    console.error(error.stack);
    res.status(500).render('500', { pageTitle: 'Internal Server Error', path: '/500' });
  };