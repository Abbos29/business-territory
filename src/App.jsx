
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactsPage from './pages/ContactsPage'

import './Reset.scss'
import './App.scss'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contacts' element={<ContactsPage />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App