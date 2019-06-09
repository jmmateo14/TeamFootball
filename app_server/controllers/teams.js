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
  res.render('oneTeam', {
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
  var path = '/team/' + req.params._id;
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