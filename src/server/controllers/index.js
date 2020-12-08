const router = require('express').Router();
//* All routes applied for /api

router.use('/*', (req, res) => {
  res.status(404).send({ status: 'BAD REQUEST', message: 'Invalid API URL' });
});

module.exports = router;
