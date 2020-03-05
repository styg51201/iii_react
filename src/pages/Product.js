import React from 'react'
import Banner from '../component/Banner'
import { Link, withRouter } from 'react-router-dom'
import Breadcrumb from '../component/Breadcrumb'

function Product(props) {
  // 利用location.search來取得query string =>  ?type=aaa&id=456
  console.log('props.location.search', props.location.search)
  // 利用內建的API(react內建)來得到URLSearchParams物件 (注意IE完全不相容，要改用query-string模組)
  const searchParams = new URLSearchParams(props.location.search) //?type=aaa&id=456
  const type = searchParams.get('type')

  //localhost:3000/product/iphone/1234?type=aaa&id=456
  //iphone跟1234 => Url params
  //URLSearchParams => ?type=aaa&id=456

  return (
    <>
      <Banner pageName={props.match.params.type} />
      <h2>使用 Url params</h2>
      <h3>產品 type = {props.match.params.type}</h3>
      <h3>產品 id = {props.match.params.id}</h3>
      <br />
      <h2>使用 search query </h2>
      <h3>產品 type = {type}</h3>
      <h3>產品 id = {searchParams.get('id')}</h3>
    </>
  )
}

export default withRouter(Product)
