import React from 'react';
import './App.css';
import './components/Portfolio.css';
import './components/Footer.css';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
