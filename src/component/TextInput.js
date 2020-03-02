import React from 'react'

class TextInput extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }

  //子層onClick事件綁定 從父層傳來的func 參數帶入要傳給父層的值
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value })
          }}
        ></input>
        <button
          /* 注意這裡只能用函式先包住，事件處理必需是一個函式 
          不能這樣 onClick={this.props.send(this.state.name)}*/

          onClick={() => {
            this.props.send(this.state.name)
          }}
        >
          送出
        </button>
      </>
    )
  }
}

export default TextInput
