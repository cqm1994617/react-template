import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider, inject } from 'mobx-react'
import Header from './components/Header'
import Spinkit from 'react-spinkit'

import Home from './pages/home'
const About = lazy(() => import('./pages/about'))
const Topics = lazy(() => import('./pages/topics'))

function WaitingComponent(Component) {
  return () => (
    <Suspense fallback={<Spinkit name="ball-scale-ripple" />}>
      <Component />
    </Suspense>
  )
}

export default class App extends React.Component {

  componentDidMount() {
    import('./pages/home').then(res => console.log(res))
  }

  render() {
    return (
      <BrowserRouter basename="/preview/asd">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={WaitingComponent(About)} />
          <Route exact path="/topics" component={WaitingComponent(Topics)} />
        </Switch>
      </BrowserRouter>
    )
  }
}