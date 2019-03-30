import React, { Component } from 'react'

class Table extends Component {
  render () {
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
            <tfoot>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Teacher Name</th>
                <th>Type of Intervention</th>
                <th>Person Contacted</th>
                <th>Notes from Intervention</th>
                <th>Scheduled Follow-Up Date</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>1</th>
                <td>2</td>
                <td>38</td>
                <td>38</td>
                <td>38</td>
                <td>38</td>
                <td>38</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Table
