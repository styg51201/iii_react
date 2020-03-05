import React from 'react'

function Login(props) {
  return (
    <>
      <h2>登入狀態 : {props.login ? '登入中' : '請你登入'}</h2>
      {props.login ? (
        <button onClick={props.trigger}>登出</button>
      ) : (
        <button onClick={props.trigger}>快登入</button>
      )}
    </>
  )
}

export default Login
