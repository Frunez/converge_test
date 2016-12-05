var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

// var Main = require('./components/main');
var SensorList = require('../app/components/SensorList');

module.exports = (
    React.createElement(Router, null, 
        React.createElement(Route, {path: "/sensors", component: SensorList}, 
            React.createElement(IndexRoute, {component: SensorList})
        )
    )
);

// <Route path=":id" component={About} />