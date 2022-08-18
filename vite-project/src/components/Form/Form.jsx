import React from 'react'
import Input from '../Input/Input'
import Style from './Form.module.css'

const Form = () => {
  return (
    <div className={Style.container}>
    <label className={Style.label}>Digite seu CEP</label>
    <Input/>
    </div>
  )
}

export default Form