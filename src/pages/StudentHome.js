import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/Index'

function StudentHome(props) {
  return (
    <>
      <div className="container">
        <h3>學生列表</h3>
        <ul className="list-group">
          {data.map((val, ind) => {
            return (
              <li className="list-group-item" key={val.id}>
                {/* 兩種路徑方法 */}
                {/* <Link to={'/student/' + val.id}>{val.name}</Link> */}
                <Link to={'/student/?sid=' + val.id}>{val.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default StudentHome
