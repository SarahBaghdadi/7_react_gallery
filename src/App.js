import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <Nav/>
        <SearchForm/>
        <PhotoContainer/>
      </div>
    </div>
  );
}

export default App;
