import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Accomodation from './pages/Accomodation/Accomodation'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='globalContainer'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)