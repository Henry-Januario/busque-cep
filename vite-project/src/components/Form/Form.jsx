import React from 'react'
import Input from '../Input/Input'
import Style from './Form.module.css'
import Button from '../Button/Button'

const Form = () => {
  return (
    <div className={Style.container}>
    <label className={Style.label}>Digite seu CEP</label>
    <Input/>
    <Button/>
    </div>
  )
}

export default Form