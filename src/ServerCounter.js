import React, { useState, useEffect } from 'react'

// 導入高階元件的方法
import { connect } from 'react-redux'

//第三種 : 導入部分 action (視為函式)
import { bindActionCreators } from 'redux'
import {
  addValue,
  minusValue,
  formServerData,
  addData,
  minusData,
} from './actions/actionIndex'

function ServerCounter(props) {
  const [dataLoad, setDataLoad] = useState(true)

  useEffect(() => {
    setDataLoad(false)
    props.formServerData()
  }, [])

  useEffect(() => {
    setDataLoad(true)
    setTimeout(() => {
      setDataLoad(false)
    }, 1000)
  }, [])

  console.log(props)

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          props.addData(props.total, 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          props.minusData(props.total, 1)
        }}
      >
        -1
      </button>
    </>
  )

  return <div className="container">{dataLoad ? loading : display}</div>
}

const mapStateToProps = store => {
  return { total: store.counter }
}

// 設定對應的action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addValue, minusValue, formServerData, addData, minusData },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerCounter)
