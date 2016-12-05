//libraries
var React = require("react");
var ReactDOM = require("react-dom");
import { Router, Route, Link, browserHistory } from "react-router";
//components and stores
var SensorList = require("./components/SensorList.jsx");
var sensorStore = require("./stores/sensorStore");
var _sensors = sensorStore.getSensors();
sensorStore.onChange(function(sensors){
  _sensors = sensors;
});

function render() {
  ReactDOM.render(<SensorList sensors={_sensors} />,
  document.getElementById("container"));
}
render();
