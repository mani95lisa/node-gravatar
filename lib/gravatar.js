var crypto = require('crypto')
  , querystring = require('querystring');

var gravatar = module.exports = {
    url: function (email, options, protocol) {
      email = email || 'unspecified';
      var baseURL;

      
      baseURL = 'http://gravatar.duoshuo.com/avatar/';
      

      var queryData = querystring.stringify(options);
      var query = (queryData && "?" + queryData) || "";

      return baseURL + crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex') + query;
    }
};