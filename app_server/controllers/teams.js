var request = require('request'); 
var apiOptions = { 
  server: 'http://localhost:3000/api'
};

var renderTeamsPage = function(req, res, responseBody) { 
  res.render('list', {
    title: 'Team Store',
    teams: responseBody 
  });
};

var renderOneTeamPage = function(req, res, responseBody) { 
  res.render('infoTeam', {
    title: 'Team Store',
    teams: responseBody 
  });
};

/* GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('index', {
      title: 'Teams Store',
      pageHeader: {
          title: 'Store of the Team'
      }
  });
};


module.exports.team = function (req, res) {
  var path = '/team/' + req.params.teamId;
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
  };

  request(requestOptions, function (err, response, responseBody) {
    renderOneTeamPage(req, res, responseBody);
  });
};


module.exports.teamList = function(req, res, next) { 
  var path = '/';
  var requestOptions = { 
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };

  request(requestOptions, function(err, response, responseBody) { 
    renderTeamsPage(req, res, responseBody); 
  });
};

/* GET 'Add team' page */
module.exports.addTeam = function(req, res) {
  res.render('newTeam', {
      title: 'Team store',
      pageHeader: {
          title: 'Team store'
      }
  });
};

/* POST 'Add team' page */
module.exports.doAddTeam = function(req, res){
  var requestOption, path;

  var postData = {
    name: req.body.name,
    country: req.body.country,
    foundation: req.body.foundation,
    coach: req.body.coach,
    stadium: req.body.stadium,
    stars_player: req.body.stars_player1,
    stars_player: req.body.stars_player2,
    stars_player: req.body.stars_player3,
    image_url: req.body.image_url
  };

  path = '/team';
  requestOption = {
    url : apiOptions.server + path,
    method : 'POST',
    json : postData
  };

  request(requestOption, function(err,response,body){
    if (response.statusCode === 201) {
      res.redirect('/list');
    }
  });

};

module.exports.doDeleteTeam = function(req,res){
  var requestOption, path;

  var path = '/team/' + req.params.teamId;
  
  requestOption = {
    url : apiOptions.server + path,
    method : 'DELETE',
    json : {},
  };

  request(requestOption, function(err,response,body){
    if (response.statusCode === 204) {
      res.redirect('/list');
    }
  });
};