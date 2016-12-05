var React = require("react");

module.exports = React.createClass({
  render: function() {
    return(
      <div>
        <a href="#">{this.props.info.name}</a>
      </div>
    )
  }
})
