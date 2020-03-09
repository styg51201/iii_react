// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })
export const getValue = value => ({ type: 'GET_VALUE', value: value })

// 模擬與伺服器相連
export const addValueAsync = value => {
  return dispatch => {
    setTimeout(() => {
      console.log('delay 3s to add value')

      //一定要用dispatch 帶入參數 action 傳到 reducer
      //dispatch => store裡的dispatch
      dispatch(addValue(value))
    }, 3000)
  }
}


export const formServerData = val => {
  return async dispatch => {
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('data', data)
    dispatch(getValue(data.total))
  }
}

export const addData = (num, val) => {
  return async dispatch => {
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'PATCH',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: `{"total":${num + val}}`,
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('data', data)
    dispatch(addValue(val))
  }
}

export const minusData = (num, val) => {
  return async dispatch => {
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'PATCH',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: `{"total":${num - val}}`,
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('data', data)
    dispatch(minusValue(val))
  }
}
