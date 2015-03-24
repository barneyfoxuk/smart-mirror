/** @jsx React.DOM */

var React = window.React = require('react');
var datetimeNode = document.getElementById("datetime");
var moment = require('moment');

var Datetime = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date()
    }
  },

  render: function () {
    var day = moment(this.props.date).format('dddd');
    var date = moment(this.props.date).format('do');
    var month = moment(this.props.date).format('MMMM');
    var hours = moment(this.props.date).format('HH');
    var minutes = moment(this.props.date).format('mm');
    var seconds = moment(this.props.date).format('ss');

    return (
      <div className="section-devide-b lg-pad-b">
        <div  className="clock h1 sm-mar-b justify">
          <span className="clock-hour ">{hours}</span><span className="">:</span><span className="clock-minute">{minutes}</span><span className="">:</span><span className="clock-second">{seconds}</span>
        </div>
        <div className="date justify">
          <span>{day} {date} {month}</span>
        </div>
      </div>
    );
  }
});

var datetime = React.render(
  <Datetime />, 
  datetimeNode
);

window.setInterval(function () {
  datetime.setProps({
    date: new Date()
  });
}, 1000);

React.render(<Datetime />, datetimeNode);
