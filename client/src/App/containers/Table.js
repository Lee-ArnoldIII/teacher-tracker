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
              </tr>
            </thead>

            <tbody>
              {list.length ? (
                list.map((item) => (
                  <React.Fragment>
                    <tr>
                      <td>{item.student_id}</td>
                      <td>{item.student_fname}  {item.student_lname}</td>
                      <td>{item.teacher_fname}  {item.teacher_lname}</td>
                      <td>{item.intervention_type}</td>
                      <td>{item.point_of_contact}</td>
                      <td>{item.notes}</td>
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
