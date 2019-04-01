import React, { Component } from 'react'

class FollowUp extends Component {
  render () {
    return (
      <div>
        <div class='tile is-ancestor'>
          <div class='tile is-vertical is-8'>
            <div class='tile'>
              <div class='tile is-8 is-parent '>
                <article class='tile is-child notification is-primary'>
                  <p class='title'>Today's Follow-Ups:</p>
                  <p class='subtitle'>No Follow-ups Today</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FollowUp
