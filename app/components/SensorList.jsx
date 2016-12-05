var React = require("react");
var Sensors = require("./Sensors.jsx");

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        Sensor Names:
        {
          this.props.sensors.map(function(sensor, index){
            return(
              <Sensors info={sensor} key={"sensor"+index} />
            )
          })
        }
      </div>
    )
  }
});
