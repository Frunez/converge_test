var jsonSensors = require("./sensors.json");

function Sensors() {
  this.sensorInfo;
}

Sensors.prototype = {

    jsonToArray: function() {
      var sensorInfoStr = JSON.stringify(jsonSensors);
      return this.sensorInfo = JSON.parse(sensorInfoStr);
    },

    sensorNameByIndex: function(n) {
      this.jsonToArray();
      return this.sensorInfo[n].name;
    },

};
