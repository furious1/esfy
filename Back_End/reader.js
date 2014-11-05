var feed = require("feed-read");
var http = require("http");
var mongoose = require("mongoose");



// Here it goes
feed("http://feeds.feedburner.com/RockPaperShotgun?format=xml", function(err, articles){
    if (err) throw err;
//    console.log(articles);

    var feedTitles =[];
    var feedContent = [];
    for (var i=0; i<articles.length; i++){
      feedTitles[i] = articles[i].title;
      feedContent[i] = articles[i].content;
    };
//    console.log(feedTitles);
//    console.log(feedContent);
    // The real way to connect to a mongo! Bongo Bongo!
    mongoose.connect("mongodb://localhost/test3")
    var db = mongoose.connection;
   // var db = mongoose.createConnection("mongodb://localhost/test");
    db.on("error", console.error);
    db.once("open",function(){
      console.log("DB Works");
    });
    //*Mongo Schema Generation
    var feedSchema = new mongoose.Schema({
      title: String,
      content: String
      });
    //*Mongo Model
    for (var i=0; i<articles.length; i++){
      var feedPusher_model = mongoose.model("feedPusher", feedSchema);
      var feed_push = new feedPusher_model;
      feed_push.title = articles[i].title;
      feed_push.content = articles[i].content;
      //*Mongo save
      feed_push.save(function(err,data){
        if(err)
        {
          console.log(err);
        }
        else
        {
          console.log(data);
        //  mongoose.disconnect();
        }
      });
    };

});

