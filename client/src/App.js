import './App.css';
import IndexPage from './pages/IndexPage/IndexPage'
import LectorsPage from './pages/LectorsPage/LectorsPage'
import LectorDetails from './pages/LectorDetails/LectorDetails'

function App() {
  return (
    <div className='container'>
      <IndexPage />
      <LectorsPage />
      <LectorDetails/>
    </div>
  );
}

export default App;
