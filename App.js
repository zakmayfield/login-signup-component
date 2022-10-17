import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className='app'>
      <div className='app-container'>
        <Router>
          <Header setUser={setUser} />
          <Routes>
            <Route path='/' element={<Dashboard user={user} />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/signup' element={<Signup setUser={setUser} />} />
          </Routes>
        </Router>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
