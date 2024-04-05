import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import AboutUs from './pages/AboutUs'
import Accomodation from './pages/Accomodation'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Header>
      <Home>
        <Routes>
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Home>
      <Footer>
      </Footer>
    </Router>
  </React.StrictMode>,
)
