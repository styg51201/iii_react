import React from 'react'
import Banner from '../component/Banner'
import Breadcrumb from '../component/Breadcrumb'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import Product from './Product'

function ProductCategory(props) {
  console.log(props.match)
  const url = props.match.url
  const path = props.match.path
  console.log(url, path)

  return (
    <>
      <Banner pageName="產品分類" />
      <Breadcrumb />
      <div className="container">
        <h1>請選擇分類</h1>
        <nav className="nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to={`${url}/mmmmm`}>
              手機
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`${url}/eeeee`}>
              耳機
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`${url}/ssssss`}>
              攝影機
            </NavLink>
          </li>
        </nav>
      </div>

      <Switch>
        <Route exact path={url}></Route>
        <Route path={`${path}/:type?/:id?`}>
          <Product />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(ProductCategory)
