import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class RegisterForm extends Component {
  inputFields({ placeholder, type, name, input }) {
    return (
      <div className='form-group'>
      <div>
        <input className='form-control'  placeholder={placeholder} type={type} name={name} {...input}/>
      </div>
    </div>
    );
  }
  
  submitform(values) {
    // do error checking here and call actions
  }
  render() {
    const { submitting, handleSubmit } = this.props;
    return (
      <div className={'registerForm'}>
        <h2 className={'blackheading'}>What Will you do with all the time you save?</h2>
        <div className={'formbody'}>
          <form onSubmit={handleSubmit(this.submitform)}>
            <label>Forms marked with * are required</label>
            <Field component={this.inputFields} type='text' name='carriername' placeholder='Carrier Name'/>
            <Field component={this.inputFields} type='text' name='firstname' placeholder='First Name'/>
            <Field component={this.inputFields} type='text' name='lastname' placeholder='Last Name'/>
            <Field component={this.inputFields} type='email' name='email' placeholder='Email'/>
            <Field component={this.inputFields} type='password' name='password' placeholder='Password'/>
            <Field component={this.inputFields} type='password' name='repassword' placeholder='Re-Enter Password'/>
            <Field component={this.inputFields} type='text' name='passwordhint' placeholder='Password Hint'/>
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
            <Field component={this.inputFields} type='text' name='MC' placeholder='MC#'/>
            <label>or</label>
            <Field component={this.inputFields} type='text' name='usdot' placeholder='USSDOT#'/>
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

export default reduxForm({
  form: 'SignupForm'
})(RegisterForm);