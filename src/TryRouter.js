import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Header from './component/Header'
import Product from './pages/Product'
import Member from './pages/Member'
import ProductCategory from './pages/ProductCategory'

function TryRouter() {
  const [login, setLogin] = useState(false)
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
          <Route path="/productCategory">
            <ProductCategory />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/member">
            <Member login={login} trigger={boo => setLogin(boo)} />
          </Route>
          {/** 定義product路徑中的params的物件屬性名稱，問號是可有可無的意思 */}
          <Route path="/product">
            <ProductCategory />
          </Route>
        </Switch>
      </>
    </Router>
  )
}
//Router 在5版之前(含) 會自動傳送 history,location.match(在props裡) 到各個頁面及他們的子元件
//但最新版本 5.1版 改成不會自動傳送 若要取得那些屬性 需要用 withRouter (一種HOC)

export default TryRouter
