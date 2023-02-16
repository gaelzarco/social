import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

import CreateAccount from './components/CreateAccount.jsx'
import Login from './components/Login.jsx'
import Landing from './components/Landing.jsx'
import NavBar from './components/NavBar';

function App() {

  const [ apiData, setApiData ] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setApiData(data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      {apiData ? (
        <p>{apiData.message}</p>
      ) : (
        <p>Connecting...</p>
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
