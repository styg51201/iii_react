import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ServerCounter from './ServerCounter'
import * as serviceWorker from './serviceWorker'

// 導入所需模組與方法
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import { rootReducer } from './reducers/rootReducer'
// -------  以下 把reducer 另外寫成一隻檔  ↑↑在import進來 -------------
// // 第一步：建立reducer
// // action = {type, value}
// // type: ADD_VALUE, MINUS_VALUE
// // ex. action = {type: 'ADD_VALUE', value: 10}
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'ADD_VALUE':
//       return state + action.value
//     case 'MINUS_VALUE':
//       return state - action.value
//     default:
//       return state
//   }
// }

// // 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
// const rootReducer = combineReducers({
//   counter,
// })
// -------  以上  -------------

// ---- 不使用 Middleware時 創建store ----
// 建立store (不使用瀏覽器開發外掛)
//const store = createStore(rootReducer)
//下面是為了要配合瀏覽器開發外掛使用
// const store = createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// ----------------------

// ---- 使用 Middleware時 創建store ----
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <ServerCounter />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// document.querySelector("#add").addEventListener("click", function() {
//   document.querySelector("#total").innerHTML =
//     +document.querySelector("#total").innerHTML + 1;
// });
// document.querySelector("#minus").addEventListener("click", function() {
//   document.querySelector("#total").innerHTML =
//     +document.querySelector("#total").innerHTML - 1;
// });
