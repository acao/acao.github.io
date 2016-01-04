const feed = require('feed-read');
const _ = require('lodash');

const fs = require('fs');
const path = require('path');

module.exports = (o) => {
  const feeds = o.feeds;
  const filename = (o.filename || 'mediumexport');

  for (var i = 0; i < feeds.length; i++) {
    const feed = feeds[i];
    const filePath = path.join(process.env.PWD , 'data', filename + "-" + feeds[i] + '.json');
    getMediumFeed(feeds[i], (data) => {
      if (data){
        const body = JSON.stringify(data,' ', 4);
        fs.writeFile(filePath, body, 'utf8', () => {
          console.log('success');
        })
      }
    });
  }

}
function getMediumFeed(feedItem, done){
  feed("http://medium.com/feed/" + feedItem, (err, articles) => {
    if (err) throw err;
    if (articles){
      done(articles);
    }
    else {
      done()
    }

  });

}
