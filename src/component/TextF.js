import React from 'react'

function TextF(props) {
  //父層的state 可以傳到子層去
  //子層用 props 來接

  return (
    <>
      <h2>Hello , {props.name}</h2>
    </>
  )
}

export default TextF
