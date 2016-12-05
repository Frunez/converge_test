var Link = require('react-router').Link;
var Sensors = require("./Sensors.jsx");

module.exports = React.createClass({displayName: "exports",
  render: function(){
    return(
      React.createElement("div", null, 
        "Sensor Names:", 

        
            this.props.sensors.map(function(sensor, index){
            return(
                React.createElement(Link, {to: "/sensors/:id"}, React.createElement(Sensors, {info: sensor, key: "sensor"+index}))
            )
          })
        
      )
    )
  }
});