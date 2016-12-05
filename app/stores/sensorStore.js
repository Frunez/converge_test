var dispatcher = require("../dispatcher");
var jsonSensors = require("./sensors.json")

function SensorStore() {
    var listeners = [];
    var stringifiedJsonSensors = JSON.stringify(jsonSensors);
    var sensors = JSON.parse(stringifiedJsonSensors);

    function getSensors() {
        return sensors;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(sensors);
        });
    }

    return {
        getSensors: getSensors,
        onChange: onChange
    }
}

module.exports = SensorStore();
