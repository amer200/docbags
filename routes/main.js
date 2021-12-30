const express = require('express');
const router = express.Router();
const mainController = require('../controller/main');
router.get('/', mainController.getUploadDoc);
router.post('/upload', mainController.postUploadDoc);
router.get('/show-docs/:filename', mainController.showDoc);
module.exports = router;