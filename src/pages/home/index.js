import React, {PureComponent, createRef} from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'
import Spinkit from 'react-spinkit'
import './index.css'
import Page from '../../components/Page'

class A extends PureComponent {
  componentDidMount() {
    console.log('redner')
  }
  render() {
    return (
      <div>adsofihuoiasuhfdoiuash</div>
    )
  }
}

class Home extends PureComponent {

  node = createRef()

  ele = null

  componentDidMount() {

    Promise.resolve().then(() => console.log('then'))
    console.log('111')
  }

  render() {
    return (
      <div>
        <div ref={(ele) => this.ele = ele}>1123</div>
      </div>
    )
  }
}

export default withRouter(Home)
