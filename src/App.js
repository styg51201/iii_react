import React from 'react'
import StudentRouter from './StudentRouter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <StudentRouter />
      </>
    )
  }
}
export default App
