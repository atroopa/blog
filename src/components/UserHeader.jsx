import React, { Component } from 'react'
import {connect} from 'react-redux';


export class UserHeader extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        User Header
      </div>
    )
  }
}

export default UserHeader;