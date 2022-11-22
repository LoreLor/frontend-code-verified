import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import KatasDetailPage from './pages/KatasDetailPage';
import KatasPage from './pages/KatasPage';
import LoginPage from './pages/LoginPage';
import RegisterPages from './pages/RegisterPages';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/katas'>Katas</Link>
          </li>
        </ul>
      </nav>

      {/* TODO: sacarlo a carpeta routes */}
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPages/>}></Route>
        <Route path='/katas' element={<KatasPage/>}></Route>
        <Route path='/katas/:id' element={<KatasDetailPage/>}></Route>
        
        {/* Redirect when page not found */}
        <Route path='*' element={<Navigate to='/' replace/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
