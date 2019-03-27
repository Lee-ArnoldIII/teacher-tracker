import React, { Component } from 'react'

class ContactForm extends Component {
  render () {
    return (
      <div>
        <div class='field is-horizontal'>
          <div class='field-label is-normal'>
            <label class='label'>Teacher ID #</label>
          </div>
          <div class='field-body'>
            <div class='field'>
              <p class='control is-expanded has-icons-left'>
                <input class='input' type='text' placeholder='Name' />
                <span class='icon is-small is-left'>
                  <i class='fas fa-user' />
                </span>
              </p>
            </div>
            <div class='field'>
              <p class='control is-expanded has-icons-left has-icons-right'>
                <input class='input is-success' type='email' placeholder='Email' value='alex@smith.com' />
                <span class='icon is-small is-left'>
                  <i class='fas fa-envelope' />
                </span>
                <span class='icon is-small is-right'>
                  <i class='fas fa-check' />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label' />
          <div class='field-body'>
            <div class='field is-expanded'>
              <div class='field has-addons'>
                <p class='control'>
                  <a class='button is-static'>
            +44
                  </a>
                </p>
                <p class='control is-expanded'>
                  <input class='input' type='tel' placeholder='Your phone number' />
                </p>
              </div>
              <p class='help'>Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label is-normal'>
            <label class='label'>Department</label>
          </div>
          <div class='field-body'>
            <div class='field is-narrow'>
              <div class='control'>
                <div class='select is-fullwidth'>
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label'>
            <label class='label'>Already a member?</label>
          </div>
          <div class='field-body'>
            <div class='field is-narrow'>
              <div class='control'>
                <label class='radio'>
                  <input type='radio' name='member' />
          Yes
                </label>
                <label class='radio'>
                  <input type='radio' name='member' />
          No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label is-normal'>
            <label class='label'>Subject</label>
          </div>
          <div class='field-body'>
            <div class='field'>
              <div class='control'>
                <input class='input is-danger' type='text' placeholder='e.g. Partnership opportunity' />
              </div>
              <p class='help is-danger'>
        This field is required
              </p>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label is-normal'>
            <label class='label'>Question</label>
          </div>
          <div class='field-body'>
            <div class='field'>
              <div class='control'>
                <textarea class='textarea' placeholder='Explain how we can help you' />
              </div>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label'>
    filler text
          </div>
          <div class='field-body'>
            <div class='field'>
              <div class='control'>
                <button class='button is-primary'>
          Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
