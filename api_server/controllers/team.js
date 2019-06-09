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
