var express = require('express');
var router = express.Router();
var ctrlTeam = require('../controllers/team'); 

//router.get('/', ctrlTeam.teamFindOne);
router.get('/', ctrlTeam.teamFindAll); 
router.get('/team/:id', ctrlTeam.teamFindById);
router.get('/country/:country', ctrlTeam.teamFindByCountry);
router.post('/team', ctrlTeam.teamCreate);
router.delete('/team/:id', ctrlTeam.teamDelete);
router.put('/team/:id', ctrlTeam.teamUpdate);

module.exports = router;
