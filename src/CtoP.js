import React from 'react'
import TextInput from './component/TextInput'

class CtoP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Cname: '',
    }
  }

  //html的屬性值只能是字串 react可以是任何東西(arr,obj,func等等)

  //React 只有單向傳輸 父->子
  //若是要子->父 需要用迂迴的方式 請看以下
  //屬性設為是一個func (執行setState) 給子層
  //子層那邊使用props 取得此func 再把欲傳送的值 帶進參數 回傳回來

  render() {
    return (
      <>
        <TextInput
          send={text => {
            this.setState({ Cname: text })
          }}
        />
        <br />
        <h2>{this.state.Cname}</h2>
      </>
    )
  }
}

export default CtoP
