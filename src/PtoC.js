import React from 'react'
import Text from './component/Text'

class PtoC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  //父層的state 可以傳到子層去
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value })
            console.log(this.state.name)
          }}
        ></input>
        <br />
        <Text name={this.state.name} />
      </>
    )
  }
}

export default PtoC
