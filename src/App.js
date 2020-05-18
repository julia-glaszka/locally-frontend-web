import React from 'react';
import Gallery from './components/gallery/Gallery.js';
import Uploader from './components/uploader/Uploader.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Uploader/>
      <Gallery url="http://localhost:8080/reactive/all"/>

    </div>
  );
}

export default App;
