import React from 'react'
//引入JQ
import $ from 'jquery'

class Jquery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0,
    }
    // 先宣告ref
    this.myRef = React.createRef()
  }

  //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
  componentDidMount() {
    //jquery使用ref的current值來獲取dom元素
    $(this.myRef.current).click(() => alert(this.state.data))
  }

  render() {
    return (
      <>
        {/* 套用ref值 */}
        <button ref={this.myRef}>alert</button>
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          change
        </button>
      </>
    )
  }
}

export default Jquery
