import React, { useState } from 'react'

function TextInputF(props) {
  const [name, setName] = useState('')

  //子層onClick事件綁定 從父層傳來的func 參數帶入要傳給父層的值

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
      ></input>
      <button
        onClick={() => {
          props.send(name)
        }}
      >
        送出
      </button>
    </>
  )
}

export default TextInputF
