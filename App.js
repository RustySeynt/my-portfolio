import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Profile from './components/Profile';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Profile />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
