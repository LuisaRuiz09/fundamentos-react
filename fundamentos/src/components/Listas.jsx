import React from 'react'

const Listas = () => {
    const estadoInicial = [
        { id:1,  texto: 'Tarea 1'},
        { id : 2,  texto: 'Tarea 2'},
        { id : 3,  texto: 'Tarea 3'},
        { id : 4, texto: 'Tarea 4'},
        {  id: 5, texto: 'Tarea 5'},
        {  id: 6,  texto: 'Tarea 6'},
    ]

    const [Listas, setListas] = React.useState(estadoInicial)
  return (
    <>
    <hr/>
    <h2>
        Listas
    </h2>
    {
        Listas.map((item)=><h4 key = {item.id}>{item.texto}</h4>)
    }
    
    </>
  )
}

export default Listas