import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
  inputFields({ placeholder, type, name, input, meta: { error, touched } }) {
    let className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <div>
          <input className='form-control' placeholder={placeholder} type={type} name={name} {...input} />
        </div>
        <div style={{ color: 'red' }}>{touched ? error : ''}</div>
      </div>
    );
  }
  onSubmit(values) {
    console.log(values);
  }
  render() {
    const { submitting, handleSubmit } = this.props;
    return (
      <div className={'registerForm'}>
        <h2 className={'blackheading'}>What Will you do with all the time you save?</h2>
        <div className={'formbody'}>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <label>All form fields are required *</label>
            <Field component={this.inputFields} type='text' name='carriername' placeholder='Carrier Name' />
            <Field component={this.inputFields} type='text' name='firstname' placeholder='First Name' />
            <Field component={this.inputFields} type='text' name='lastname' placeholder='Last Name' />
            <Field component={this.inputFields} type='email' name='email' placeholder='Email' />
            <Field component={this.inputFields} type='password' name='password' placeholder='Password' />
            <Field component={this.inputFields} type='password' name='repassword' placeholder='Re-Enter Password' />
            <Field component={this.inputFields} type='text' name='passwordhint' placeholder='Password Hint' />
            <div className="form-group">
              <div>
                <Field className='form-control' name="broker" required component='select'>
                  <option>Select Broker</option>
                  <option value="test1">Test#1</option>
                  <option value="test2">Test#2</option>
                </Field>
              </div>
            </div>
            <label>Please provide one of the following:</label>
            <Field component={this.inputFields} type='text' name='MC' placeholder='MC#' />
            <label>or</label>
            <Field component={this.inputFields} type='text' name='usdot' placeholder='USSDOT#' />
            <label>Are you a single owner/operator?</label>
            <div className="form-group">
              <div>
                <Field className='form-control' name="owneroperator" required component='select'>
                  <option>Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Field>
              </div>
            </div>
              <button className='btn btn-large' disabled={submitting}>NEXT</button>
            </form>
        </div>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  // probably better to use switch statement
  if (!values.carriername) {
    errors.carriername = 'Please enter a carrier';
  }
  if (!values.firstname) {
    errors.firstname = 'Please enter a first name';
  }
  if (!values.lastname) {
    errors.lastname = 'Please enter a last name';
  }
  if (!values.email) {
    errors.email = 'Please enter a Email';
  }
  if (values.password !== values.repassword) {
    errors.password = 'Enter the same password twice';
  }
  if (!values.passwordhint) {
    errors.passwordhint = 'Please enter a hint';
  }
  return errors;
}
export default reduxForm({
  validate,
  form: 'SignupForm'
})(RegisterForm);