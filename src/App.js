import React from 'react'
import CartRouter from './CartRouter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <CartRouter />
      </>
    )
  }
}
export default App
