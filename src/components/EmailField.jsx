var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function() {
    return {
      valid: true,
      value: ""
    }
  },
  onChange: function(event) {
    var val = event.target.value;

    if(!validator.validate(val)) {
      this.setState({valid: false, value: val});
    } else {
      this.setState({valid: true, value: val});
    };
  },
  render: function() {
    var formClass = this.state.valid ? "form-group" : "form-group has-error";
    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} value={this.state.value} placeholder="email"/>
      </div>
      );
  }
});

module.exports = EmailField;
