import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Bulma from 'bulma'

import FollowUp from './components/FollowUp'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <FollowUp />

      </div>
    )
  }
}
