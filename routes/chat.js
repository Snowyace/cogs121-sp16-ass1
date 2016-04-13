 var models = require("../models");
exports.view = function(req, res) {
	var data = {newsfeed: []};
	models.newsFeed.find(function(err,newsfeed){
		if(err) return console.log(err);
	}).sort({created: 'desc'}).exec(renderProjects);
	//console.log("------------start---------------------------------");
	//console.log(data);
	function renderProjects(err, newsfeed) {
        res.render('chat', { 'newsfeed': newsfeed });
        //'newsfeed' is the one for the chat.handlebars
        // the :newsfeed is passing the entire sorted collection to 'newsfeed'
    }
   	
    
};
