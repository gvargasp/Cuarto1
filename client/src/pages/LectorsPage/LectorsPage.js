import { Link } from 'react-router-dom'
import { useState } from 'react'
import './LectorsPage.css'

const LectorsPage = () => {

  const [lectors, setLectors] = useState([])
  
  const loadLectors = () => {
    fetch('http://localhost:5005/api/lectors')
      .then(res => res.json())
      .then(allLectors => setLectors(allLectors))
  }
  
  loadLectors()

  return (
    <main>
      <h1>Esta es la LISTA</h1>
      <hr />
      {lectors.map(eachLector => {
        return (
          <Link to={`/detalles/${eachLector._id}`}>
            <article className="lector-card">
              <p>Codigo     :{eachLector.codigo}</p>
              <p>Nombre     :{eachLector.nombre}</p>
              <p>Apellidos  :{eachLector.apellidos}</p>
            </article>
          </Link>
        )
      })}
      <Link to="/">Volver al INICIO</Link>
    </main>
  )
}

export default LectorsPage