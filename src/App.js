import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import './App.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <Nav/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => <SearchForm {...props}/>}/>
            <Route path='/search/:query' render={(props) => <SearchForm {...props}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
