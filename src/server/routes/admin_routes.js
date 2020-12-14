const router = require('express').Router();
const validate = require('../controllers/validation.js');
const adminController = require('../controllers/admin_controllers.js');

router.post('/login', adminController.loginAdmin);
router.post('/signup', adminController.createAdmin);

module.exports = router;
