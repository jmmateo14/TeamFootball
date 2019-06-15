var express = require('express');
var router = express.Router();
var ctrlTeams = require('../controllers/teams'); 

/* GET home page. */
router.get('/', ctrlTeams.homelist);
router.get('/team/:teamId', ctrlTeams.team);
router.get('/list', ctrlTeams.teamList); 
router.get('/new', ctrlTeams.addTeam);
router.post('/team', ctrlTeams.doAddTeam);
router.post('/team/:teamId', ctrlTeams.doDeleteTeam);

module.exports = router;