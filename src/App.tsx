import React from 'react';
import Header from './components/Header';
import LetterBar from './components/LettersBar';
import WordsSidebar from './components/WordsSidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='fixed-header'>
      <Header />
      <LetterBar />
      </div>
      <WordsSidebar />
    </div>
  );
}

export default App;
