var feed = require("feed-read");
var http = require("http");
var mongoose = require("mongoose")


feed("http://feeds.feedburner.com/RockPaperShotgun?format=xml", function(err, articles){
    if (err) throw err;
//    console.log(articles);

    var feedTitles=[];
    var feedContent=[];
    for (var i=0; i<articles.length; i++){
      feedTitles[i] = articles[i].title;
      feedContent[i] = articles[i].content;
    };
//    console.log(feedTitles);
//    console.log(feedContent);

    var db = mongoose.createConnection("mongodb://192.168.1.883/test");
    db.on("error",console.error);
    db.once("open",function(){
//  Mongo DB schema
      var feedSchema = new mongoose.Schema({
        feed_title:{type:string},
        feed_content: {type:content}
      });

      var firstFeed = {
        feed_title: feedTitles[0],
        feed_content: feedContent[0] 
      };
      var first_push = new feedSchema(firstFeed);
      // Saving the feed
      first_push.save(function(error, data){
        if(error){
          console.log(error);
        }
        else{
          console.log(data);
        }
      });
      
    });


});



// console.log(feeds)


/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Only Testing\n');
}).listen(3000, '0.0.0.0');
*/
