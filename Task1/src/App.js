import React from 'react';
import Header from './components/Header';
import GenresBar from './components/GenresBar';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <GenresBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
