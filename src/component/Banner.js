import React from 'react'

function Banner(props) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{props.pageName}</h1>
          <p className="lead">哈囉 ! {props.pageName}</p>
        </div>
      </div>
    </>
  )
}

export default Banner
