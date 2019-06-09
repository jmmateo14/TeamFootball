var express = require('express');
var router = express.Router();
var ctrlTeam = require('../controllers/team'); 

router.get('/', ctrlTeam.teamFindOne); 
router.get('/id/:id', ctrlTeam.teamFindById);
router.get('/country/:country', ctrlTeam.teamFindByCountry);

module.exports = router;
