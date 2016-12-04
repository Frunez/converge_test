var jsonData = require("../data/data.json");

function Data() {
  this.sensorData;
  this.dataId;
}

Data.prototype = {

  jsonToArray: function() {
    var sensorDataStr = JSON.stringify(jsonData);
    return this.sensorData = JSON.parse(sensorDataStr);
  },

  mapDataById: function(wantedId) {
    this.jsonToArray();
    var dataWithId = this.sensorData.filter(function(item) {
      if (item.sensorId === wantedId) {
        return item;
      }
    });
    return dataWithId;
  },
};

var data = new Data();
console.log(data.jsonToArray());
