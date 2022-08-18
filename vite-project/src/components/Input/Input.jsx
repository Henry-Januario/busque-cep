import React from 'react'
import Style from './Input.module.css'

const Input = ({onchange,value}) => {
  return (
    <input type="number" id="cep" value={value} className={Style.input} onChange={onchange}></input>
  )
}

export default Input