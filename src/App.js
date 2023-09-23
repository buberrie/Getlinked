import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homePage/Homepage';
import ContactPage from './pages/contactPage/ContactPage'
import RegisterPage from './pages/registerPage/RegisterPage'
import NavBar from './components/navBar/NavBar';

function App() {

  const [navShow, setnavShow] = useState(false) // toggle navbar
  const onShow = () => {
    if (navShow === true) {
      setTimeout(() => {
        setnavShow(false)
      }, 300)
    } else {
      setnavShow(true)
    }
  }

  const hideNav = () => {
    if (navShow === true) {
      setTimeout(() => {
        setnavShow(false)
      }, 300)
    }
  }  //hide navbar when anywhere on the screen is clicked

  return (
    <div onClick={hideNav}>
      <Router>
        <NavBar onShow={onShow} navShow={navShow} />
        <Routes>
        <Route path='/' element={<Homepage />} />
          <Route path='/:sectionId' element={<Homepage />} />
          <Route path='/contactUs' element={<ContactPage />} />
          <Route path='/Register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
