import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import RandomUser from './components/RandonUser/RandonUser'


function App() {

  const [info, setInfo] = useState()
  const [input, setInput] = useState('')

  async function handleReq (input){
      const response = await fetch(`http://viacep.com.br/ws/${input}/json/`)
      const json = await response.json()
      console.log(json.logradouro)   
      setInfo(json.logradouro)
  } 

  function handleSetInput () {

  }

  return (
    <div className="App">
      <Header/>
      <Form/>

      <RandomUser/>
    </div>
  )
}

export default App
