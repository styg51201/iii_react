import React from 'react'

class Count extends React.Component {
  //建構子
  constructor(props) {
    super(props)
    //設定狀態 裡面是物件
    this.state = {
      total: 0,
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            //重新設定新的物件給他
            this.setState({ total: this.state.total + 1 })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -
        </button>
      </>
    )
  }
}

export default Count
