import React from 'react'
import { data } from '../data/Index'
import { withRouter } from 'react-router-dom'

//student/xxxx (url params 用法)
// function Student(props) {
//   //取得的 url param 是字串
//   const sid = props.match.params.id

//   let student = null
//   for (let i = 0; i < data.length; i++) {
//     //data裡的id是數值 , 嚴格比較時,在sid前放+號 =>強制轉型成數值
//     if (data[i].id === +sid) {
//       student = data[i]
//     }
//   }
//   if (!student) {
//     return (
//       <>
//         <h1>沒有找到資料</h1>
//         <button onClick={() => props.history.push('/')}>回首頁</button>
//       </>
//     )
//   }
//   return (
//     <>
//       <ul>
//         <li>{student.name}</li>
//         <li>{student.id}</li>
//         <li>{student.birth}</li>
//       </ul>
//       <button onClick={() => props.history.push('/')}>回首頁</button>
//     </>
//   )
// }

//?sid=xxxxx (get 參數用法)
function Student(props) {
  const searchParams = new URLSearchParams(props.location.search)
  const sid = searchParams.get('sid')
  let student = null
  for (let i = 0; i < data.length; i++) {
    //data裡的id是數值 , 嚴格比較時,在sid前放+號 =>強制轉型成數值
    if (data[i].id === +sid) {
      student = data[i]
    }
  }
  if (!student) {
    return (
      <>
        <h1>沒有找到資料</h1>
        <button onClick={() => props.history.push('/')}>回首頁</button>
      </>
    )
  }
  return (
    <>
      <ul>
        <li>{student.name}</li>
        <li>{student.id}</li>
        <li>{student.birth}</li>
      </ul>
      <button onClick={() => props.history.push('/')}>回首頁</button>
    </>
  )
}

export default withRouter(Student)
