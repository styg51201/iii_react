import React, { useState, useEffect } from 'react'

function getDataFromServer() {
  return [
    { name: 'iphone x', price: 15000 },
    { name: 'book', price: 200 },
  ]
}

function Effect(props) {
  const [products, setProducts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [reload, setReload] = useState(true)

  //useEffect 三合一 =>(componentDidMount,DidUpdate,willUnmount)
  //第一個參數是箭頭函式,內容放componentDidMount時 要執行的code
  //第二個參數是陣列,內容放某個state,若此state變動時會先render再一次執行第一個參數的函式內容
  useEffect(() => {
    const data = getDataFromServer()

    setProducts(data)
    setIsLoaded(true)

    console.log('componentDidMount')
  }, [reload])

  const handleReload = () => {
    setIsLoaded(false)
    setReload(!reload)
  }

  let loading = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  let dataList = (
    <ul>
      {products.map((val, ind) => {
        return (
          <li key={ind}>
            名稱 :{val.name} / 價格 : {val.price}
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      {console.log('render')}
      {isLoaded ? dataList : loading}
      <button onClick={handleReload}>重載</button>
    </>
  )
}

export default Effect
