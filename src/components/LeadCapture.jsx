var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(event) {
    if(!this.refs.fieldEmail.state.valid) {
      alert('u suck at fillin out forms. email is always required in a lead capture form. dummy.');
    } else {
      // send request to server
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };
      console.log('we the best!');

      this.refs.fieldEmail.clear();
      this.refs.fieldName.clear();
    };
  },
  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="first" ref="fieldName"/>
            <br/>
            <EmailField ref="fieldEmail"/>
            <button className="btn btn-primary"
            onClick={this.onSubmit}>submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
