const express = require('express')
const router = express.Router()
const { pool, client } = require("../database.js");
const { LinkController } = require('../controllers/LinkControllers.js');

// pool --> pool.query
// client --> client.execute

router.get('/', LinkController.index);


module.exports = router;


