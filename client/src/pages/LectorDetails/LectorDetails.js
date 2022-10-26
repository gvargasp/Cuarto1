import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
const LectorDetails = () => {

  const { lector_id } = useParams()
  const [lector, setLector] = useState([])

  const loadLectorDetails = () => {
    fetch(`http://localhost:5005/api/details/${lector_id}`)
      .then(response => response.json())
      .then(lector => setLector(lector))
  }

  loadLectorDetails()

  return (
    <main className='lector-details'>
      <h1>Esta es el DETALLE de {lector.nombre}</h1>
      <hr />
      <article style={{ display: 'inline-block', width: '40%' }}>
        <p>apellido: {lector.apellidos}</p>
        <h3>Specs</h3>
        <ul>
          <li>ci       :{lector.ci}</li>
          <li>fecha    :{lector.fecha}</li>
          <li>dirección:{lector.direccion }</li>
        </ul>
        <Link to='/'>Volver</Link>
      </article>
    </main>
  )
}

export default LectorDetails