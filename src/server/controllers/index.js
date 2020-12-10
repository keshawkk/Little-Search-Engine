const router = require('express').Router();
const { getSession, removeSession } = require('./jwt');

//* All routes applied for /api
router.use('/admin', require('../routes/admin_routes.js'));
router.use('/user', require('../routes/user_routes.js'));

router.use('/session', getSession);
router.use('/logout', removeSession);


router.use('/*', (req, res) => {
  res.status(404).send({ status: 'BAD REQUEST', message: 'Invalid API URL' });
});

module.exports = router;
