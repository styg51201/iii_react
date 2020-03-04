import React from 'react'

class Bootstrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      usernameIsOk: false,
      passwordIsOk: false,
    }
  }

  // jsx比html更嚴格

  // 單一行的結尾必須要是/>
  // class要換成className
  // for要換成htmlFor
  // style要變成js的物件值(雙花括號)

  // 利用物件計算得來的屬性名稱，讓所有的輸入框用共一個方法
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  // [event.target.name] => 用中括號是因為
  // 讓obj 裡的屬性名稱(key) 可以使用變數或是計算
  // const a= 'bbb'
  // const o = {['b'+'ar']:'123',[a]:'456'}
  // console.log(o) => {bar:'123',bbb:'456'}

  //作法一
  // handleSend = event => {
  //   this.state.username === 'aaa'
  //     ? this.setState({ usernameIsOk: true })
  //     : this.setState({ usernameIsOk: false })
  //   this.state.password === '123'
  //     ? this.setState({ passwordIsOk: true })
  //     : this.setState({ passwordOk: false })
  // }

  //作法二
  handleSend = event => {
    let usernameIsOk = false
    let passwordIsOk = false

    //記得賦值~~~~~~~~!!!!!!!!!!!~~~~~~~~~~~~!!!!!!!!!!!~~~~~~~~!!!!
    if (this.state.username === 'aaa') usernameIsOk = !usernameIsOk
    if (this.state.password === '123') passwordIsOk = !passwordIsOk

    this.setState({ usernameIsOk, passwordIsOk })
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              name="username"
              className={`form-control ${
                this.state.usernameIsOk ? 'is-valid' : 'is-invalid'
              }`}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleInput}
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
                this.state.passwordIsOk ? 'is-valid' : 'is-invalid'
              }`}
              placeholder="Password"
              onChange={this.handleInput}
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
              this.handleSend()
            }}
          >
            Submit
          </button>
          <span style={{ color: 'red', fontSize: 50 }}>注意注意</span>
        </div>
      </>
    )
  }
}

export default Bootstrap
