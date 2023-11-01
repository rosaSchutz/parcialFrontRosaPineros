import { useState } from 'react'
import './App.css'
import Card from "./Components/Card";

function App() {
  const [cliente, setCliente] = useState({
    nombre: '',
    serie: ''
  })
  const [mostar, setMostar] = useState(false)
  const [error, setError] = useState(false)

  const handlerSumbit = (event) => {
    event.preventDefault()
    if (cliente.nombre.length >= 3 && cliente.serie.length > 6) {
      setMostar(true)
      setError(false)
    } else {
      setError(true)
      setMostar(false)
    }
  }

  const stylesForm = { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    background: 'white', 
    gap: '10px', 
    padding: '20px', 
    color: 'black'
  }

  const styles = { 
    background: 'white', 
    padding: '10px', 
    textAlign: 'left', 
    border: 'solid 1px gray', 
    borderRadius: '10px',
    width: '50%',
    color: 'black'
  }

  const stylesButton = { 
    background: '#D0D4CA', 
    color: 'black',
    borderRadius: '10px',
  }

  return (
    <div className="App">
      <h1>Escribe tu serie favorita:</h1>
      {!mostar &&
      <form onSubmit={handlerSumbit} style={stylesForm}>
        <label>Cual es tu nombre?</label>
        <input type="text" value={cliente.nombre} onChange={(event) => setCliente({ ...cliente, nombre: event.target.value })} style={styles}/>
        <label>Cual es tu serie favorita?</label>
        <input type="text" value={cliente.serie} onChange={(event) => setCliente({ ...cliente, serie: event.target.value })} style={styles} />
        <button style={stylesButton}>enviar</button>
      </form>}
      {mostar && <Card nombre={cliente.nombre} serie={cliente.serie} />}
      {error && <h5 style={{ color: 'red' }}>"Por favor chequea que la información sea correcta".</h5>}
    </div>
  )
}

export default App
