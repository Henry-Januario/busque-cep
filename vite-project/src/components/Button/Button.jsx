import React from 'react'
import Style from './Button.module.css'

const Button = ({onclick}) => {
  return (
    <button onClick={onclick} className={Style.button}>Pesquisar</button>
  )
}

export default Button