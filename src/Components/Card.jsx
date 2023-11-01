import React from 'react'

const Card = ({ nombre, serie }) => {
  const stylesCard = { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    background: '#D0D4CA', 
    gap: '5px', 
    padding: '20px', 
    color: 'black', 
    margin: '50px',
    borderRadius: '50px',
    color: 'black'
  }


  
  return (
    <div style={stylesCard}>
      <h3>Hola {nombre}!</h3>
      <h4>Nos encanta la eleccion de serie que hiciste: <br /> {serie}.</h4>
    </div>
  )
}

export default Card