import React, { Component } from 'react'
import axios from 'axios'

class Table extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this.getList()
  }

  getList () {
    axios.get('http://localhost:5000/api/getlist')

      .then(list => {
        console.log('here is the list', list)
        this.setState({ list: list.data })
      })
    console.log(this.state)
  }

  render () {
    const { list } = this.state

    return (
      <div>
        <div className='box'>
          <table className='table is-bordered is-striped'>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Teacher Name</th>
                <th>Type of Intervention</th>
                <th>Person Contacted</th>
                <th>Notes from Intervention</th>
                <th>Scheduled Follow-Up Date</th>
              </tr>
            </thead>

            <tbody>
              {list.length ? (
                list.map((item) => (
                  <React.Fragment>
                    <tr>
                      <th>{item.student_id}</th>
                      <th>{item.student_fname}  {item.student_lname}</th>
                      <th>{item.teacher_fname}  {item.teacher_lname}</th>
                      <th>{item.intervention_type}</th>
                      <th>{item.point_of_contact}</th>
                      <th>{item.notes}</th>
                      <th>{item.follow_up_date}</th>
                    </tr>
                  </React.Fragment>

                )
                )) : <div><h1>nothing to return</h1></div>}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Table
