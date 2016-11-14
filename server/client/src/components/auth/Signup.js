import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {
  handleFormSubmit(formProps){
    this.props.signupUser(formProps);
  }
  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong> Opps!</strong>{ this.props.errorMessage }
        </div>
      )
    }
  }

  render(){
    const { handleSubmit, fields:{ email, password, passwordConfirm}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label> Email: </label>
          <input className="form-control" { ...email } />
          { email.touched && email.error && <div className="error">{email.error}</div> }
        </fieldset>

        <fieldset className="form-group">
          <label> password: </label>
          <input className="form-control" type="password" { ...password } />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label> Confirm Password: </label>
          <input className="form-control" type="password" { ...passwordConfirm } />
          { passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div> }
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary"> Sign Up </button>
      </form>
    )
  }
}

function validate(formProps){
  const errors = {};

  // can be refactored
  if(!formProps.email){
    errors.email = 'Please enter an email';
  }

  if(!formProps.password){
    errors.password = 'Please enter a password';
  }

  if(!formProps.passwordConfirm){
    errors.passwordConfirm = 'Please confirm your password';
  }

  if(formProps.password !== formProps.passwordConfirm){
    errors.password = 'Password must match';
  }
  return errors;
}

//mapstate to props written in a different style in flashtalking code - both work
function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
