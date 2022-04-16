import React from 'react'

const Eventos = () => {
    const[texto, setText] = React.useState('Texto inicial')
    const eventoClick = () => setText('Cambiando el texto...')
    const resetear = () => setText('Texto inicial')
  return (
    <>
    <h2> 
        {texto}
        <button onClick={eventoClick}>Cambiar</button>
        <button onClick={resetear}>Resetear</button>



    </h2>
    
    </>
  )
}

export default Eventos