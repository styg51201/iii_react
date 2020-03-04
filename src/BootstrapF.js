import React, { useState } from 'react'

function BootstrapF(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameIsOk, setUsernameIsOk] = useState(false)
  const [passwordIsOk, setPasswordIsOk] = useState(false)

  const handleInput = event => {
    set + event.target.name(event.target.value)
  }

  //作法二
  const handleSend = event => {
    let usernameIsOk = false
    let passwordIsOk = false

    //記得賦值~~~~~~~~!!!!!!!!!!!~~~~~~~~~~~~!!!!!!!!!!!~~~~~~~~!!!!
    if (username === 'aaa') usernameIsOk = !usernameIsOk
    if (password === '123') passwordIsOk = !passwordIsOk

    setUsernameIsOk(usernameIsOk)
    setPasswordIsOk(passwordIsOk)
  }

  return (
    <>
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            name="Username"
            className={`form-control ${
              usernameIsOk ? 'is-valid' : 'is-invalid'
            }`}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleInput}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${
              passwordIsOk ? 'is-valid' : 'is-invalid'
            }`}
            placeholder="Password"
            onChange={handleInput}
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleSend()
          }}
        >
          Submit
        </button>
        <span style={{ color: 'red', fontSize: 50 }}>注意注意</span>
      </div>
    </>
  )
}

export default BootstrapF
