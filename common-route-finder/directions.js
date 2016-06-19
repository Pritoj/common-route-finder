var GoogleMapsAPI = require('googlemaps');
var Q = require('q');


//Google api config
var publicConfig = {
  key: 'KEY_HERE',
  encode_polylines: true,
  secure: true, // use https
};

module.exports= function getDirections(origin, destination) {
  gmApi = new GoogleMapsAPI(publicConfig);
  var params = {
    origin,
    destination,
    //get alternative routes to compare
    alternatives : true
  };
  return Q.Promise(function (resolve, reject, nofity) {
    gmApi.directions(params, function (err, resp) {
      if(err){
        reject(err);
      }
      else{
        resolve(resp);
      }
    });
  });
}