const OAuth = require('oauth');

function search(req, res) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'SCrH6Hddxi87AbnYJ8iQeDg3d',
      'aNaFysh8TxcPr6e7jNED8FsRLRbcT2WrhxRfYuM5xjm9aZgU39',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8&src=typd',
      '867212291019636736-xjXFmLpJjHyKxZsNoj1s79ad3V4UeSt', //test user token
      'cnOa30PpyZbiPMzCboA5v7rXOAmpGc6afsfmACYIO6eBi', //test user secret
    function (e, data) {
      if (e) console.error(e);
      res.send(data);
    });
}

module.exports = {
  search
}
