const router = require('express').Router();
const userController = require('../controllers/user_controllers.js');

router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);

module.exports = router;
