module.exports = function getCommonLines(steps, steps2) {
  var stepLen = steps.length;
  var mapArr1 = [];
  for (let i = 0; i < stepLen; i++) {
    //get all polylines
    //in arr
    mapArr1.push(steps[i].polyline.points);
  }

  var stepLen2 = steps2.length;
  var commonWaypoints = [];
  var commonDistance = 0;
  //not go through second arr
  //and find first ouccrance
  for (let i = 0; i < stepLen2; i++) {
    //get all polylines
    //in arr
    let index = mapArr1.indexOf(steps2[i].polyline.points);
    if (index !== -1) {
      commonWaypoints.push(steps2[i]);
      commonDistance += steps2[i].distance.value;
    }
  }
  return {commonWaypoints,commonDistance}
}

