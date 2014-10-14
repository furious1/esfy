var FeedParser = ('feedparser');
var http = require('http');
http.get('http://leoville.tv/podcasts/sn.xml', funtction(res) {
  // Feedreader Response
  .on('error', function(error){

  })
  .on('meta', function(meta){
    feedMeta = meta;
  })
  .on('readable',function(){
    var stream = this, item;
    while (item = stream.read()){
      var ep = {
        'title':item.title,
        'mediaUrl':item.link,
        'publicationDate':item.pubDate,
      };
      episodes.push(ep);
    }
  })
  .on('end', function(){
    var result = {
      'feedName':feedMeta.title,
      'feedArtist':feedMeta['itunes:author']['#']
      'website':feedMeta.link
      'episodes':episodes
    };
  });
}