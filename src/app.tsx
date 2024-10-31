import React, { FC, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import BookNowForm from './components/BookNowForm';
import AboutUs from './components/AboutUs';
import Policies from './components/Policies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; 


const App: FC = () => {
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);

  const handleOpenBookNow = () => {
    setIsBookNowOpen(true);
  };

  const handleCloseBookNow = () => {
    setIsBookNowOpen(false);
  };

  return (
    <Router>
      <div className="background">
        <div className="App scrollable flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero
                      isOpen={isBookNowOpen}
                      handleOpenBookNow={handleOpenBookNow}
                      handleCloseBookNow={handleCloseBookNow}
                    />
                    <BookNowForm isOpen={isBookNowOpen} onClose={handleCloseBookNow} />
                    <Portfolio />
                  </>
                }
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/contact-us" element={<ContactForm />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
          <Footer /> 
        </div>
      </div>
    </Router>
  );
};

export default App;