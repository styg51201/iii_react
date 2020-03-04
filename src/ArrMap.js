import React from 'react'

//模擬從伺服器端取到資料
function getDataFromServer() {
  return [
    { name: 'iphone x', price: 15000 },
    { name: 'book', price: 200 },
  ]
}

class ArrMap extends React.Component {
  constructor(props) {
    super(props)
    // product = { name: string, price: numbers }
    this.state = {
      products: [],
      isLoaded: false,
    }
    console.log('constructor')
  }

  // 一開始元件內容會是空的出現在頁面上而才會componentDidMount
  // 元件已經出現在網頁上才會呼叫這個方法
  // 這時才能連線到後端要資料
  componentDidMount() {
    const data = getDataFromServer()
    setTimeout(() => {
      this.setState({ products: [...data], isLoaded: true })
    }, 3000)
    //每setState 改值一次 就會在render一次
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    let loading = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )

    let dataList = (
      <ul>
        {this.state.products.map((val, ind) => {
          return (
            <li key={ind}>
              名稱 :{val.name} / 價格 : {val.price}
            </li>
          )
        })}
      </ul>
    )

    return <>{this.state.isLoaded ? dataList : loading}</>
  }
}

export default ArrMap
