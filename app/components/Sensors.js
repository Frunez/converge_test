
module.exports = React.createClass({displayName: "exports",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("a", {href: "#"}, this.props.info.name)
      )
    )
  }
})