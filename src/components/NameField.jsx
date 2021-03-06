var React = require('react');

var NameField = React.createClass({
  getInitialState: function() {
    return {value: ""};
  },
  onChange: function(event) {
    this.setState({value: event.target.value});
  },
  clear: function() {
    this.setState({value: ""});
  },
  render: function() {
    return (
      <input
        className="form-control"
        placeholder={this.props.type + " name"}
        onChange={this.onChange}
        value={this.state.value} />
      );
  }
});

module.exports = NameField;
