import './styles/App.css'
import React from 'react';
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error';
function App() {

  return <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error/>} />
        </Routes>
    </>;
}

export default App
