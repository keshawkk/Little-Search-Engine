const router = require('express').Router();
const fileController = require('../controllers/file_controllers.js');

router.post('/upload', fileController.saveData );

module.exports = router;
