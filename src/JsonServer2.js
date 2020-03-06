import React, { useState, useEffect } from 'react'

function JsonServer2() {
  const [total, setTotal] = useState(0)
  const [dataHasLoaded, setDataHasLoaded] = useState(false)

  async function getTotalFromServer() {
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'GET',
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料 因為setState 算是異步 想要讓他同步執行所以用await
    await setTotal(data.total)
    // 開啟載入
    await setDataHasLoaded(true)
  }

  async function updateTotalFromServer() {
    const newTotal = +total + 1
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'PUT',
      body: `{"total":"${newTotal}"}`,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()

    setTotal(data.total)
    console.log(data.total)
  }

  useEffect(() => {
    //跟server要資料
    setTimeout(() => {
      getTotalFromServer()
    }, 20)
  }, [])

  useEffect(() => {}, [total])

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
      <h1>{total}</h1>
      <button onClick={updateTotalFromServer}>+1</button>
    </>
  )

  return (
    <>
      <div className="container">{!dataHasLoaded ? loading : display}</div>
    </>
  )
}

export default JsonServer2
