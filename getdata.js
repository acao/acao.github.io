var medium = require('./scripts/mediumexport');

var options = {
  feeds: [
    '@ad_harmonium',
    // 'popular-misconceptions-about-human-behavior',
    // 'building-writemoment-with-react-redux-electron-js'
  ],
  filename: 'medium',
}
medium(options);
