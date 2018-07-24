const mountRoutes = app => {
  app.use('/', (req, res, next) => {
    res.send('This is a public route.');
  });
};

module.exports = mountRoutes;
