import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from "react-datepicker";

import Navbar from '../components/Navbar'
 
import "react-datepicker/dist/react-datepicker.css";

class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      teacherID: '',
      teacherLName: '',
      teacherFName: '',
      studentID: '',
      studentLName: '',
      studentFName: '',
      interventionType: '',
      pointOfContact: '',
      nameOfContact: '',
      dateOfIntervention: new Date(),
      followUpDate: new Date(),
      notes: ''
    }
   this.handleFollowUpChange = this.handleFollowUpChange.bind(this)
   this.handleInterventionDateChange = this.handleInterventionDateChange.bind(this)
  }

  handleChange = (evt) => {
    this.setState ({
        [evt.target.name]:evt.target.value
    })
    
  }

  handleInterventionDateChange = (date) =>{
    this.setState ({
        dateOfIntervention: date
    })
  }

  handleFollowUpChange = (date) =>{
    this.setState ({
        followUpDate: date
    })
  }

  handleSubmit = () => {
      axios.post('/api/updateForm', {data: this.state})
      .then(res => {
          console.log(res)
          alert('Form updated succesfully')
          this.props.history.push('/list')
      })
      this.setState ({
        teacherID: '',
        teacherLName: '',
        teacherFName: '',
        studentID: '',
        studentLName: '',
        studentFName: '',
        interventionType: '',
        pointOfContact: '',
        nameOfContact: '',
        dateOfIntervention: new Date(),
        followUpDate: new Date(),
        notes: ''
      })
      
  }

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
                <input className='input' type='text' placeholder='Teacher ID #' onChange = {this.handleChange} name='teacherID' value={this.state.teacherID} />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='First Name' onChange = {this.handleChange} name='teacherFName' value={this.state.teacherFName} />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='Last Name' onChange = {this.handleChange} name='teacherLName' value={this.state.teacherLName} />
              </p>
            </div>
          </div>
        </div>
<br />

        <div className='field is-horizontal'>
          {/* Student Information */}
          <div className='field-label is-normal'>
            <label className='label'>Student ID #</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <p className='control'>
                <input className='input' type='text' placeholder='Studen ID #' onChange = {this.handleChange} name='studentID' value={this.state.studentID} />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='First Name' onChange = {this.handleChange} name='studentFName' value={this.state.studentFName} />
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded'>
                <input className='input' type='text' placeholder='Last Name' onChange = {this.handleChange} name='studentLName'  value={this.state.studentLName} />
              </p>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          {/* Intervention Information */}
          <div className='control'></div>
          <div className='field-label is-normal'>
            <label className='label'>Intervention Type</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select onChange = {this.handleChange} name='interventionType' value={this.state.interventionTypes}>
                    <option>Select one</option>
                    <option value='Grade Conference'>Grade Conference</option>
                    <option value='Behavior Conference'>Behavior Conference</option>
                    <option value='Parent Contact phone'>Parent Contact - phone</option>
                    <option value='Parent Contact email'>Parent Contact - email</option>
                    <option value='Parent Contact conference'>Parent Contact - conference</option>
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
                  <select onChange = {this.handleChange} name='pointOfContact' value={this.state.pointOfContact}>
                    <option value=''>Select one</option>
                    <option value='Mom'>Mom</option>
                    <option value='Dad'>Dad</option>
                    <option value='Guardian'>Guardian</option>
                    <option value='Other'>Other</option>
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
              <input className='input' type='text' placeholder='Name of Contact' onChange = {this.handleChange} name='nameOfContact' value={this.state.nameOfContact}/>
            </p>
          </div>
          <div className='field-label is-normal'>
            <label className='label'>Date of Intervention</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control is-expanded'>
              <DatePicker className='input'
                selected={this.state.dateOfIntervention}
                onChange={this.handleInterventionDateChange} value={this.state.dateOfIntervention}/>
              </div>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Intervention Notes</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control is-expanded'>
                <textarea className='textarea' placeholder='e.g. Hello world' onChange = {this.handleChange} name='notes' value={this.state.notes}/>
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
        <div className='field-label is-normal'>
            <label className='label'>Follow-up Date</label>
          </div>
            <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control is-expanded'>
              <DatePicker className='input'
                selected={this.state.followUpDate}
                onChange={this.handleFollowUpChange}
                value={this.state.followUpDate}/>
                
              </div>
            </div>
        </div>
        
          </div>
        <a className='button is-primary is-rounded' onClick={this.handleSubmit}>Submit</a>
      </div>

    )
  }
}

export default ContactForm
