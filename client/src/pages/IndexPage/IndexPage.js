import { Link } from 'react-router-dom'

const IndexPage = () => {
  return (
    <main>
      <h1>Bienvendido</h1>
      <hr />
      <Link to="/galeria">Ver Galeria</Link>
    </main>
  )
}

export default IndexPage