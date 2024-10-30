const express = require('express')
const homecontroler =require('../controllers/homecontroler');

const router = express.Router();
router.get('/home',homecontroler.homepage);




module.exports = router;