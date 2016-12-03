var jsonSensors = require('./sensors.json');
var sensorDataStr = JSON.stringify(jsonSensors);
var sensorData = JSON.parse(sensorDataStr);

console.log(sensorData[0].name);
