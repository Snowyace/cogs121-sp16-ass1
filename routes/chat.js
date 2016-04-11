 var models = require("../models");

exports.view = function(req, res) {
	var data = {newsfeed: []};
	models.newsFeed.find(function(err,newsfeed){
		if(err) return console.log(err);
		data.newsfeed = newsfeed;
	res.render('chat',data);
	});
	//console.log("------------start---------------------------------");
	//console.log(data);

    
};
