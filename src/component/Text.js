import React from 'react'

class Text extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  //父層的state 可以傳到子層去
  //子層用 props 來接
  render() {
    return (
      <>
        <h2>Hello , {this.props.name}</h2>
      </>
    )
  }
}

export default Text
