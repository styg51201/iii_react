import React, { useState } from 'react'

function AppFunc() {
  //設定狀態 [變數名稱,set變數名稱(駝峰)] = useState(初始值)
  const [total, setTotal] = useState(0)
  // const a = 1
  // setTotal(a)
  // console.log(a)

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1) //set變數名稱(更改的值)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </>
  )
}

export default AppFunc
