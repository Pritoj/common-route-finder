
var getCommonLines = require('./common-lines');




module.exports = function([journey1,journey2]){
  //now we have all the routes
  //time to compare
  var routes1 = journey1.routes;
  var routes2 = journey2.routes;
  //a best distance obj
  var bestRouteObj = {
    maxCommonDist : 0,
    commonWaypoints : false

  };
  for(let i in routes1){
    for(let j  in routes2){
      //console.log(routes1[i].legs[0].steps)
      //the routes will only have 1 leg each
      //since we haven't defined waypoints
      let commonRoute = getCommonLines(routes1[i].legs[0].steps,routes2[j].legs[0].steps);
      if(commonRoute.commonDistance > bestRouteObj.maxCommonDist){
        //the max common distance in this route is greater
        //so let's do this instead
        bestRouteObj.maxCommonDist = commonRoute.commonDistance;
        bestRouteObj.commonWaypoints = commonRoute.commonWaypoints;
      }
    }
  }

  return bestRouteObj;
}

