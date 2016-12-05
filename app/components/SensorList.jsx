var React = require("react");
var Link = require('react-router').Link;
var Sensors = require("./Sensors.jsx");

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        Sensor Names:

        {
            this.props.sensors.map(function(sensor, index){
            return(
                <Link to="/sensors/:id"><Sensors info={sensor} key={"sensor"+index} /></Link>
            )
          })
        }
      </div>
    )
  }
});
