'use strict';

module.exports = app => {
  const { router, controller } = app;
  const apiRouter = router;
  const { users } = controller.api;

  apiRouter.get('/users/list', users.getUsers);
  // apiRouter.post('/users/create', users.createUser);
};
