/** @jsx React.DOM */

var React = window.React = require('react/addons');
var weatherNode = document.getElementById("weather");

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      today: 'lightning',
      todayTemp: '10',
      day1: 'sunny',
      day2: 'cloudy',
      day3: 'cloudy',
      day4: 'sunny',
      day5: 'sunny'
    }
  },

  render: function () {
    var cx = React.addons.classSet;

    var todayClass = 'wi wi-day-' + this.props.today;
    var todayTemp = this.props.todayTemp + 'c';
    var day1Class = 'wi wi-day-' + this.props.day1;
    var day2Class = 'wi wi-day-' + this.props.day2;
    var day3Class = 'wi wi-day-' + this.props.day3;
    var day4Class = 'wi wi-day-' + this.props.day4;
    var day5Class = 'wi wi-day-' + this.props.day5;

    return (
      <div className="weather">
        <div className="weather-today flex subsection-devide-b sm-mar-b">
          <div className="flex-box">
            <i className={todayClass}></i>
          </div>
          <div className="weather-today-temp flex-box flex-box-center">
            {todayTemp}
          </div>
        </div>
        <div className="weather-week flex section-devide-b sm-pad-b">
          <div className="flex-box">
            <i className={day1Class}></i>
          </div>
          <div className="flex-box">
            <i className={day2Class}></i>
          </div>
          <div className="flex-box">
            <i className={day3Class}></i>
          </div>
          <div className="flex-box">
            <i className={day4Class}></i>
          </div>
          <div className="flex-box">
            <i className={day5Class}></i>
          </div>
        </div>
      </div>
    );
  }
});

var weather = React.render(
  <Weather />, 
  weatherNode
);

React.render(<Weather />, weatherNode);
