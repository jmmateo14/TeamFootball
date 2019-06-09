var express = require('express');
var router = express.Router();
var ctrlTeams = require('../controllers/teams'); 

/* GET home page. */
router.get('/', ctrlTeams.homelist);
router.get('/list', ctrlTeams.teamList); 

module.exports = router;