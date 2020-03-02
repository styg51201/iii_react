import React, { useState } from 'react'
import TextF from './component/TextF'
import TextInputF from './component/TextInputF'

function CtoCF() {
  const [cname, setCname] = useState('')

  return (
    <>
      <TextInputF
        send={text => {
          setCname(text)
        }}
      />
      <br />
      <TextF name={cname} />
    </>
  )
}

export default CtoCF
