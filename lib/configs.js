var rootDomain = /(^|\.)ele\.me$/.test(location.hostname) ? 'ele.me' : 'eleme.cn';

module.exports = {
  // supposed to provide a new url for POST
  trackerUrl: 'https://web-ubt.' + rootDomain + '/collect/log',
  // trackerUrl: 'http://localhost:3000',
  dehydratedKey: 'ubt-dehydrated-events',
  sortIdKey: 'ubt-checking-sort-id',
  configUrl: 'https://crayfish.elemecdn.com/ubt.js@json/config',

  version: '1.3.7',

  // will be overwriten by network results
  crayfish: {
    concurrency: 3, // how many ajax requests to send message
    interval: 1000, // interval of checking
    queueSize: 100, // which will trigger a submit
    timeout: 3000 // request request timeout
  }
};
