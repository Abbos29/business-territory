import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

import './Reset.scss';
import './App.scss';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import SinglePage from './pages/SinglePage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/services/:serviceId' element={<SinglePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
};

export default App;
