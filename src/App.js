import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider, inject } from 'mobx-react'
import Spinkit from 'react-spinkit'
import 'antd/dist/antd.min.css'
import { Layout } from 'antd'
import MenuBar from './components/MenuBar'

const { Header, Content, Footer, Sider } = Layout;

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

  render() {
    return (
      <BrowserRouter basename="/preview/asd">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={200} style={{ background: '#555' }}>

          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={WaitingComponent(About)} />
                <Route exact path="/topics" component={WaitingComponent(Topics)} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              footer
          </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}