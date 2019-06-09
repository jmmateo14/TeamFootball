var mongoose = require('mongoose'); 
var teamSchema = require('../models/team');
var Team = mongoose.model('Team'); 


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };


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