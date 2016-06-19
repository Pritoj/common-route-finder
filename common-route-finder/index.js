var Q = require('q');
var getDirections = require('./directions');
var getCommonRoute = require('./common-route');

//promises for both 
//the routes
function run([source1, source2, dest1, dest2]) {

  return Q.all([
    getDirections(source1, dest1),
    getDirections(source2, dest2)
  ]).then(function ([j1, j2]) {
    process.send(getCommonRoute([j1, j2]));
  });
}

process.on('message', function (m) {
  run(m);
});

