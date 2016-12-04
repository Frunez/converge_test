import React from "react";
import ReactDOM from "react-dom";
// var jsonSensors = require("./data/sensors.json");
// var jsonData = require("./data/data.json");

var Sensor = React.createClass() ({

    jsonToArray: function() {
      var sensorInfoStr = JSON.stringify(jsonSensors);
      return this.sensorInfo = JSON.parse(sensorInfoStr);
    },

    sensorNameByIndex: function(n) {
      this.jsonToArray();
      return this.sensorInfo[n].name;
    },

    render: function() {
      return (
        <div className="sensor">
          why?
        </div>
      );
    },
});

var Data = React.createClass({

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
  render: function() {
    return (
      <div className="data">
        Hello
      </div>
    );
  },
});

ReactDOM.render(
  <Sensor />,
  document.getElementById("app")
);

// var http = require("http");
//
// http.createServer(function (request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hello World\n");
// }).listen(8080);

// console.log("Server running at http://127.0.0.1:8080");
