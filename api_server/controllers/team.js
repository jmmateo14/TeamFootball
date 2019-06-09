var mongoose = require('mongoose'); 
var teamSchema = require('../models/team');
var Team = mongoose.model('Team'); 


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

//Encuentra el primer equipo
module.exports.teamFindOne = function(req, res) {
    console.log('Finding team details', req.params);
    Team 
    .findOne() 
    .exec(function(err, team) {
        if (!team) {
          sendJSONresponse(res, 404, {
            "message": "team not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(team);
        sendJSONresponse(res, 200, team);
      });
    };

    //Busca equipo por Id
    module.exports.teamFindById = function(req, res) {
        if (req.params && req.params.id) { 
            Team
            .findById(req.params.id) 
            .exec(
                function(err, team) {
                    if (!team) { 
                        return res
                        .status(404)
                        .send({"message": "team not found"});
                    } else if (err) {
                        return res
                        .status(404)
                        .send(err);
                    }
                    return res 
                    .status(200)
                    .send(team);
                }
            );
        } else {
            return res
            .status(404)
            .send({"message": "No team in the request"});
        }
    };    

    //Busca equipos por pais
    module.exports.teamFindByCountry = function(req, res) {
        if (req.params && req.params.country) { 
            Team
            .find({country: req.params.country}) 
            .exec(
                function(err, teams) {
                    if (!teams) { 
                        return res
                        .status(404)
                        .send({"message": "country not found"});
                    } else if (err) {
                        return res
                        .status(404)
                        .send(err);
                    }
                    return res 
                    .status(200)
                    .send(teams);
                }
            );
        } else {
            return res
            .status(404)
            .send({"message": "No `country` in request"});
        }
    };

    //Crea un equipo
    //Revisar el array de jugadores.
    module.exports.teamCreate = function(req, res) {
        Team
        .create({ 
            name: req.body.name, 
            country: req.body.country,
            foundation: req.body.foundation,
            coach: req.body.coach,
            stadium: req.body.stadium,
            stars_player: req.body.stars_player,
            image_url: req.body.image_url
        },function(err, team) {
            if (err) { 
                return res
                .status(400)
                .send(err);
            }
            return res 
            .status(201)
            .send(team);
        });
    };

    //Elimina un equipo
    module.exports.teamDelete = function(req, res) {
        if (req.params && req.params.id) { 
            Team
            .findByIdAndDelete(req.params.id) 
            .exec(
                function(err, team) {
                    if (err) { 
                        return res
                        .status(400)
                        .send(err);
                    }
                    return res 
                    .status(204)
                    .send(null);
                }
            );
        } else {
            return res
            .status(404)
            .send({"message": "No id in the request"});
        }
    };

    //Actualiza un equipo.
    module.exports.teamUpdate = function(req, res) {
        if (req.params && req.params.id) { 
            Team
            .findById(req.params.id) 
            .exec(
                function(err, team) {
                    if (!team) { 
                        return res
                        .status(404)
                        .send({"message": "no team found"});
                    } else {
                        if (req.body.name) { 
                            team.name = req.body.name;
                        }
                        if (req.body.country) {
                            team.country = req.body.country;
                        }
                        if (req.body.foundation) {
                            team.foundation = req.body.foundation;
                        }
                        if (req.body.coach) {
                            team.coach = req.body.coach;
                        }
                        if (req.body.stadium) {
                            team.stadium = req.body.stadium;
                        }
                        if (req.body.stars_player) {
                            team.stars_player = req.body.stars_player;
                        }
                        if (req.body.image_url) {
                            team.image_url = req.body.image_url;
                        }
                        team.save(function (err, team) { 
                            if (err) { 
                                return res
                                .status(404)
                                .send(err);
                            }
                            else {
                                return res 
                                .status(200)
                                .send(team);
                            }
                        });
                    }
                }
            );
        } else {
            return res
            .status(404)
            .send({"message": "No id in the request"});
        }
    };