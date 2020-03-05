import React from 'react'
import Banner from '../component/Banner'
import Breadcrumb from '../component/Breadcrumb'
import { Link, withRouter } from 'react-router-dom'

function About(props) {
  console.log(props)
  return (
    <>
      <Banner pageName="關於" />
      <Breadcrumb />
    </>
  )
}
//用withRouter 取得路徑相關屬性
export default withRouter(About)
