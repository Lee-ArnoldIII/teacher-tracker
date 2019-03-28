import React, { Component } from 'react'

class ContactForm extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>Parent/Student Contact Log</h1>
          <p>Please enter the appropriate information in each field below
                  to ensure accuracy.
          </p>
        </div>

        <div className='field is-horizontal'>
          {/* teacher information */}
          <div className='field-label is-normal'>
            <label className='label'>Teacher ID #</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <p className='control'>
                <input className='input' type='text' placeholder='Teacher ID #' />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='First Name' />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='Last Name' />
              </p>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          {/* Student Information */}
          <div className='field-label is-normal'>
            <label className='label'>Student ID #</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <p className='control'>
                <input className='input' type='text' placeholder='Studen ID #' />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='First Name' />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='Last Name' />
              </p>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          {/* Intervention Information */}
          <div className='field-label is-normal'>
            <label className='label'>Intervention Type</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select>
                    <option>Select one</option>
                    <option>Grade Conference</option>
                    <option>Behavior Conference</option>
                    <option>Parent Contact - phone</option>
                    <option>Parent Contact - email</option>
                    <option>Parent Contact - conference</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='field-label is-normal'>
            <label className='label'>Point of Contact</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select>
                    <option>Select one</option>
                    <option>Mom</option>
                    <option>Dad</option>
                    <option>Guardian</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Name of Contact</label>
          </div>
          <div className='field is-narrow'>
            <p className='control is-expanded'>
              <input className='input' type='text' placeholder='Name of Contact' />
            </p>
          </div>
          <div className='field-label is-normal'>
            <label className='label'>Date of Intervention</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control is-expanded'>
                <input className='input' type='text' placeholder='Please enter a date' />
              </div>
            </div>
          </div>
        </div>

        <h1>Intervention Notes</h1>
        <textarea className='textarea' placeholder='e.g. Hello world' />

      </div>

    )
  }
}

export default ContactForm
