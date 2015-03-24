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
  document.body
);


window.setInterval(function () {
  clock.setProps({
    date: new Date()
  });
}, 1000);