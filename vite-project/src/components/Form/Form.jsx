import React from 'react'
import Input from '../Input/Input'
import Style from './Form.module.css'
import Button from '../Button/Button'

const Form = ({value,onchange}) => {
  return (
    <div className={Style.container}>
    <label className={Style.label}>Digite seu CEP</label>
    <Input value={value} onchange={onchange}/>
    <Button/>
    </div>
  )
}

export default Form