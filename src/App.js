import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <p>Hello from Netflix</p>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      
    </div>
  );
}

export default App;
