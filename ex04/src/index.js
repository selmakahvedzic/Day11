var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  var monitorsList = [];
  var i = 0;
  for (i = 0; i < monitorsListArray.length; i++) {
    monitorsList.push([newMonitorsList[i], i + 1]);
  }

  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
