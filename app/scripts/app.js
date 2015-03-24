/** @jsx React.DOM */

var React = window.React = require('react');
var clockNode = document.getElementById("clock");

// var Clock = require('../components/clock/clock'),

var Clock = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date()
    }
  },
  render: function () {
    return <span>{this.props.date.toString()}</span>;
  }
});

var clock = React.renderComponent(
  <Clock />, 
  clockNode
);

window.setInterval(function () {
  clock.setProps({
    date: new Date()
  });
}, 1000);