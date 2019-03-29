import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Bulma from 'bulma'

class List extends Component {
  constructor (props) {
    super(props)
    this.getList()
    
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this.getList()
  }

  getList () {
    axios.get('http://localhost:5000/api/getList')

      .then(list => {
        console.log('this is the list', list)
        this.setState({ list: list.data })
      })
  }
handleClick = () => this.sendInfo(this.state.blah, this.state.list.id)
sendInfo = (data, id) => {
    console.log(data)
    axios.post('http://localhost:5000/api/updateName', {data: data, id:id})
    .then(result => this.setState({ list: result.data }))
}

  render () {
    const { list } = this.state

    return (
      <div className='App'>
        <h1>List of Items</h1>
        {/* {list.length ? (
          <div>
            {list.map((item) => {
              return (
                <div>
                  {item}
                </div>
              )
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
        } */}
        {list.email}
        <input onChange={(e) => this.setState({ blah: e.target.value })} />
        <button onClick={this.handleClick}> submit</button>
        <br />
        <br />
        <div>
        <Link to={'./ContactForm'}>
              <a className='button is-link is-small'>Contact Form</a>
            </Link>
        </div>
      </div>
    )
  }
}

export default List
