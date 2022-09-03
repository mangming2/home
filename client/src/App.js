import { Route, Routes } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LogPage from './pages/LogPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';

import './App.css';
import GlobalStyles from './GlobalStyles';
import MainFooter from './components/MainFooter';

function App() {
  return (
    <>
      <GlobalStyles />
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/log" element={<LogPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/join" element={<JoinPage />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
