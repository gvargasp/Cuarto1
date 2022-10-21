import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import IndexPage from './pages/IndexPage/IndexPage'
import LectorsPage from './pages/LectorsPage/LectorsPage'
import LectorDetails from './pages/LectorDetails/LectorDetails'

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" exact element={<IndexPage />} />
          <Route path="/galeria" element={<LectorsPage />} />
          <Route path="/whaterver" element={<LectorDetails/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
