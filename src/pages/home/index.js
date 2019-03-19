import React from 'react'
import { withRouter } from 'react-router-dom'
import Spinkit from 'react-spinkit'
import test from './test.png'
import './index.css'

const Home = (props) => {
  return (
    <div>
      <img src={test} />
      <div className="test"></div>
      <Spinkit name='double-bounce' />
    </div>
  )
}

export default withRouter(Home)
