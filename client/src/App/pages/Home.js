import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bulma from 'bulma'

class Home extends Component {
  render () {
    return (
      <div className='App'>
        <section className='hero is-large is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Welcome to TeacherTracker
              </h1>
              <h2 className='subtitle'>
        Your easy contact tracking system
              </h2>
            </div>
            <Link to={'./list'}>
              <a className='button is-link is-large'>ENTER</a>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
