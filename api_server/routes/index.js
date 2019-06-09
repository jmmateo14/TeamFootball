var express = require('express');
var router = express.Router();
var ctrlTeam = require('../controllers/team'); 

router.get('/', ctrlTeam.teamFindOne); 

module.exports = router;
