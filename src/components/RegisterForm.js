import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { browserHistory } from 'react-router';

class RegisterForm extends Component {
  submitform(values){
    console.log(JSON.stringify(values, null, 2))
  }
  render() {
    const { submitting, handleSubmit } = this.props;
    this.props.history.push('/cinfo');
    return (
      <div className={'registerForm'}>
        <h2 className={'blackheading'}>What Will you do with all the time you save?</h2>
        <div className={'formbody'}>
          <form onSubmit={handleSubmit(this.submitform)}>
            <div className="form-field">
              <div>
                *<Field component='input' required placeholder='Carrier Name' type='text' name='carrier' />
              </div>
            </div>
            <div className="form-field">
              <div>
                *<Field component='input' placeholder='First Name' type='text' name='firstname' />
              </div>
            </div>
            <div className="form-field">
              <div>
                *<Field component='input' placeholder='Last Name' type='text' name='lastname' />
              </div>
            </div>
            <div className="form-field">
              <div>
                *<Field component='input' placeholder='Email' type='email' name='email' />
              </div>
            </div>
            <div className="form-field">
              <div>
                *<Field component='input' placeholder='Password' type='password' name='password' />
              </div>
            </div>
            <div className="form-field">
              <div>
                *<Field component='input' placeholder='Re-Enter Password' type='password' name='password2' />
              </div>
            </div>
            <div className="form-field">
              <div>
                *<Field component='input' placeholder='Password Hint' type='text' name='hint' />
              </div>
            </div>
            <div className="form-field">
              <div>
                *<Field name="broker" required component='select'>
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
                *<Field component='input' placeholder='MC#' type='text' name='mc' />
              </div>
            </div>
            <div className="form-field">
              <label>or</label>
              <div>
                *<Field component='input' placeholder='USDOT#' type='text' name='usdot' />
              </div>
            </div>
            <div className="form-field">
              <label>Are you a single owner/operator</label>
              <div>
                *<Field component='input' type="radio" name="ownerop" value="Yes" /> Yes<br />
                *<Field component='input' type="radio" name="ownerop" value="No" /> No<br />
              </div>
            </div>
            <button disabled={submitting}>NEXT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SignupForm'
})(RegisterForm);