import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homePage/Homepage';
import ContactPage from './pages/contactPage/ContactPage'
import RegisterPage from './pages/registerPage/RegisterPage'

function App() {

  // const [navShow, setnavShow] = useState(true) // toggle navbar
  // const onShow = () => setnavShow(!navShow)

  // const hideNav = (navShow ? !onShow : onShow) //hide navbar when anywhere on the screen is clicked

  return (
    <div>
      <Router>
        {/* <Topbar onShow={onShow} navShow={navShow} /> */}
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
