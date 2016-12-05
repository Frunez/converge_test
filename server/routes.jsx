var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

// var Main = require('./components/main');
var SensorList = require('../app/components/SensorList');

module.exports = (
    <Router>
        <Route path="/sensors" component={SensorList}>
            <IndexRoute component={SensorList} />
        </Route>
    </Router>
);

// <Route path=":id" component={About} />
