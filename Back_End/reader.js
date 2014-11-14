var feed = require("feed-read");
var mongoose = require("mongoose");


//MongoDB via mongoose connection
mongoose.connect("mongodb://localhost/test15");
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(){
    console.log("DB Connection Test Succesfull")
});
//MongoDB Schema
var feedSchema = new mongoose.Schema({
      title: String,
      //content: String
      num: Number
});
var feedPusher_model = mongoose.model("feedPusher", feedSchema);
// Declaring global loops
var feed_push = [];
var feed_validate = [];

//Feed Reader
function feeder(){
    feed("http://feeds.feedburner.com/RockPaperShotgun?format=xml", function(err, articles){
            if (err) throw err;
            for (var i=0; i<articles.length; i++){
            feed_push[i] = new feedPusher_model();
            feed_push[i].num = i+1;
            feed_push[i].title = articles[i].title;
            feed_push[i].content = articles[i].content;
            //Feed Validation + Save
            feed_validate[i] = feedPusher_model.find({title:articles[i].title});
            feed_validate[i].exec(function (err,dbresponse){
                if (err){console.log(err);}
                if (dbresponse.title == feed_push.title){
                    console.log("Article is duplicate");
                }
                else{
                    feed_push[i].save(function(err,data){
                        if(err){console.log(err);}
                        else{
                            console.log(data);
                            }
                    });

                }
            });
        }
    });
}
var timeInterval = 2000;

setInterval(feeder, timeInterval)

