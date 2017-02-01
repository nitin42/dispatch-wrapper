const request = require('superagent');

module.exports = (source_api, callback) => {
  request.get(source_api).then((res) => {
    callback(res.body);
  }).catch((err) =>{
    throw new Error(err);
  });
}
