import React from 'react'

// 導入高階元件的方法
import { connect } from 'react-redux'

//第二種 : 導入全部的action (視為物件)
// import * as actionCreators from './actions/actionIndex'

//第三種 : 導入部分 action (視為函式)
import { bindActionCreators } from 'redux'
import { addValue, minusValue, addValueAsync } from './actions/actionIndex'

function StoreCounter(props) {
  //觀察由connect可以在這個元件得到什麼
  console.log(props)

  //第一種 : 直接dispatch(參數放入{action})
  // return (
  //   <>
  //     <h1>{props.total}</h1>
  //     <button
  //       onClick={() => {
  //         props.dispatch({ type: 'ADD_VALUE', value: 1 })
  //       }}
  //     >
  //       +1
  //     </button>
  //     <button
  //       onClick={() => {
  //         props.dispatch({ type: 'MINUS_VALUE', value: 1 })
  //       }}
  //     >
  //       -1
  //     </button>
  //   </>
  // )

  // 第二種 & 第三種 :
  return (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          props.addValue(1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          props.minusValue(1)
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          props.addValueAsync(5)
        }}
      >
        3s +5
      </button>
    </>
  )
}

// 高階元件的套用
// connect 就像withRouter那樣 , 上層自動傳值到props
// mapStateToProps => 相當於是 getState
// mapDispatchToProps => 相當於是 setState
// export default connect(mapStateToProps,mapDispatchToProps)(App)

//connect的第一個參數 =>告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡 => props.total
const mapStateToProps = store => {
  return { total: store.counter }
}

//-------以下各種的export　↓↓ -------
// 第一種 : connect的第二個參數不代入 => mapDispatchToProps 會預設為 null
// export default connect(mapStateToProps)(StoreCounter)

// 第二種 : connect的第二個參數 放入 import進來的名稱
// export default connect(mapStateToProps, actionCreators)(StoreCounter)

// 第三種 :
//需用bindActionCreators 告訴 redux dispatch對應到哪些action
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addValue, minusValue, addValueAsync }, dispatch)
}
//  第二個參數 放入 上面的函式名
export default connect(mapStateToProps, mapDispatchToProps)(StoreCounter)
