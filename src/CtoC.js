import React from 'react'
import Text from './component/Text'
import TextInput from './component/TextInput'

class CtoC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Cname: '',
    }
    //bind方法 讓sendFunc裡的this等於是CtoC本身
    // this.sendFunc = this.sendFunc.bind(this)
  }

  //方法一 把func 作為class的方法
  //這裡的箭頭函式不是箭頭函式 是類別定義裡的屬性? ES8新增的
  //這樣就不用使用 上面的bind方法 讓this等於是CtoC本身
  //原本的this是指向sendFunc本身 而sendFunc本身沒有.setState的方法 所以會出錯
  sendFunc = text => {
    this.setState({ Cname: text })
  }

  render() {
    return (
      <>
        {/* 方法一 */}
        <TextInput send={this.sendFunc} />
        {/* 方法二 直接寫一個func在裡面 */}
        {/* <TextInput
          send={text => {
            this.setState({ Cname: text })
          }}
        /> */}
        <br />
        <Text name={this.state.Cname} />
      </>
    )
  }
}

export default CtoC
