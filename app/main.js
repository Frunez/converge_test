var React = require("react");
var ReactDOM = require("react-dom");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var Routes = require("../server/routes")
//components and stores
var SensorList = require("./components/SensorList.jsx");
var sensorStore = require("./stores/sensorStore");
var _sensors = sensorStore.getSensors();
sensorStore.onChange(function(sensors){
  _sensors = sensors;
});

function render() {
  ReactDOM.render(
    React.createElement(SensorList, {sensors: _sensors}),
    Routes,
    document.getElementById("container"));
}
render();