import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Bulma from 'bulma'

import FollowUp from '../components/FollowUp'
import Table from '../containers/Table';
import Navbar from '../components/Navbar'

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
        <div id='nav'>
          <Navbar />
        </div>
        <div id='header'>
        <section className="hero is-primary">
        <div className="hero-body">
        <div className="container">
        <h1 className="title">Welcome to the Dashboard</h1>
       </div>
      </div>
    </section>
    </div>
    <br />
    <div className='container is-fluid' id='leftblock'>
      <FollowUp />
      <div className='section'>
        <div className='level'>
          <p className='level-item'>
            Click the create button to create a new contact form submission
          </p>
        
          <div className='level-left level-item'>
           <Link to={'./ContactForm'}>
              <a className='button is-link is-normal'>Contact Form</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

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
        {/* {list.email}
        <input onChange={(e) => this.setState({ blah: e.target.value })} />
        <button onClick={this.handleClick}> submit</button> */}
        <br />
        <br />
        
        <Table />
      </div>
    )
  }
}

export default List
