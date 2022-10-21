import { Link } from 'react-router-dom'

const LectorsPage = () => {

  const loadLectors = () => {
    fetch('http://localhost:5005/api/lectors')
      .then(res => res.json())
      .then(allLectors => console.log(allLectors))
  }
  
  loadLectors()
  
  return (
    <main>
      <h1>Esta es la LISTA</h1>
      <hr />
      <Link to="/">Volver al INICIO</Link>
    </main>
  )
}

export default LectorsPage