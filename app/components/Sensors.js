
module.exports = React.createClass({displayName: "exports",
  render: function() {
    return(
      React.createElement("div", null, 
        this.props.info.name
      )
    )
  }
})