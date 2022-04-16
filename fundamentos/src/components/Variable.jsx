import React from 'react'

const Variable = () => {
    const saludo = "Hola Mundo"
    const imagen = 'https://picsum.photos/300'
    const texto_alternativo = 'Esto es una imagen de picsum'
  return (
      <>
    <h1>{saludo}</h1>
    <img src = {imagen} alt = {texto_alternativo}/>
    </>
  )
}

export default Variable