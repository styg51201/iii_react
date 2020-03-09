import { combineReducers } from 'redux'

// 第一步：建立reducer
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return +state + action.value
    case 'MINUS_VALUE':
      return +state - action.value
    case 'GET_VALUE':
      return +action.value
    default:
      return +state
  }
}

// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const rootReducer = combineReducers({
  counter,
})

export { rootReducer }
