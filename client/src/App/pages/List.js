import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Bulma from 'bulma'

import FollowUp from '../components/FollowUp'
import Table from '../containers/Table'
import Navbar from '../components/Navbar'

class List extends Component {
  render () {
    return (
      <div className='App'>
        <div id='header'>
          <section className='hero has-text-grey-lighter'>
            <div className='hero-body'>
              <div className='container'>
                <h1 className='title'>Welcome to the Dashboard</h1>
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
                  <a className='button is-primary is-outlined is-large'>Create</a>
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
