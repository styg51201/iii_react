import React from 'react'
import Banner from '../component/Banner'
import Breadcrumb from '../component/Breadcrumb'
import { Link, withRouter } from 'react-router-dom'

function Member(props) {
  console.log(props)
  return (
    <>
      <Banner pageName="會員" />
      <Breadcrumb />
      <h2>登入狀態 : {props.login ? '登入中' : '請你登入'}</h2>
      {props.login ? (
        <button onClick={() => props.trigger(false)}>登出</button>
      ) : (
        <button onClick={() => props.trigger(true)}>快登入</button>
      )}
    </>
  )
}
//用withRouter 取得路徑相關屬性
export default Member
