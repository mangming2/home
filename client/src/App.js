import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About/AboutPage';
import LogPage from './pages/LogPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

import './App.css';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/log" element={<LogPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/join" element={<JoinPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
