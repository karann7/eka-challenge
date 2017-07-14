import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class RegisterForm extends Component {
  render(){
    return (
      <div className={'registerForm'}>
        <h2 className={'blackheading'}>What Will you do with all the time you save?</h2>
        <div className={'formbody'}>
          <form>
            
            <div className="form-field">
              <div>
                <Field component='input' placeholder='Carrier Name' type='text' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <div>
                <Field component='input' placeholder='First Name' type='text' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <div>
                <Field component='input' placeholder='Last Name' type='text' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <div>
                <Field component='input' placeholder='Email' type='email' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <div>
                <Field component='input' placeholder='Password' type='password' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <div>
                <Field component='input' placeholder='Re-Enter Password' type='password' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <div>
                <Field component='input' placeholder='Password Hint' type='text' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <div>
                <Field name="broker" component='select'>
                  <option>Select Broker</option>
                  <option value="test1">Test#1</option>
                  <option value="test2">Test#2</option>
                  <option value="test3">Test#3</option>
                </Field>
              </div>
            </div>
            <div className="form-field">
              <label>Please provide one of the following:</label>
              <div>
                <Field component='input' placeholder='MC#' type='text' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <label>or</label>
              <div>
                <Field component='input' placeholder='USDOT#' type='text' name='email'/>
              </div>
            </div>
            <div className="form-field">
              <label>Are you a single owner/operator</label>
              <div>
                <Field component='input' type="radio" name="ownerop" value="Yes"/> Yes<br/>
                <Field component='input' type="radio" name="ownerop" value="No"/> No<br/>
              </div>
            </div>
            <button>NEXT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SignupForm'
})(RegisterForm);