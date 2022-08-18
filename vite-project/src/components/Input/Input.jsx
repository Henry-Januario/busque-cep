import React from 'react'
import Style from './Input.module.css'

const Input = () => {
  return (
    <input type="number" id="cep" className={Style.input}></input>
  )
}

export default Input