import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import Product from './pages/Product'

function TryRouter() {
  return (
    <Router>
      <>
        <Header />

        {/* 舊寫法 第3,4版的*/}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
        </Switch> */}

        {/* 新寫法 第5版*/}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default TryRouter
