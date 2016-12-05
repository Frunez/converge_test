var ReactDOM = require("react-dom");
var SensorList = require("./components/SensorList.jsx");
var sensorStore = require("./stores/sensorStore");
var _sensors = sensorStore.getSensors();
sensorStore.onChange(function(sensors){
  _sensors = sensors;
});
// var jsonSensors = require("./stores/sensors.json");
// var jsonData = require("./stores/data.json");

// var sensorInfoStr = JSON.stringify(jsonSensors);
// var _sensors = JSON.parse(sensorInfoStr);

// var sensorDataStr = JSON.stringify(jsonData);
// var _data = JSON.parse(sensorDataStr);

function render() {
  ReactDOM.render(React.createElement(SensorList, {sensors: _sensors}),
  document.getElementById("container"));
}
render();