import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }
  }
  //this.setState 是異步執行
  //onClick={()=>{
  //    this.setState({total:this.state.total + 10})
  //    console.log('total'+this.state.total) => 不會得到10而是0
  //}}
  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          //方法一
          onClick={() => {
            //先計算好total值
            const newTotal = this.state.total + 10

            //再傳入setState
            this.setState({ total: newTotal })

            //利用新的state值進行運算或取到最後的改變值
            console.log(newTotal)
          }}
          //   方法二
          //   onClick={() => {
          //     this.setState({第一個參數},()=>{第二個callback 更改完後執行的函式})
          //     this.setState({total:this.state.total + 10
          // },()=>{console.log(this.state.total)})
          //   }}
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

export default App
