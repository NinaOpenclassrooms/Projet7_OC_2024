import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import AboutUs from './pages/AboutUs'
import Accomodation from './pages/Accomodation/accomodation'
import Error from './pages/Error/error'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './main.scss'
import './utils/style/colors.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='globalcontainer'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)