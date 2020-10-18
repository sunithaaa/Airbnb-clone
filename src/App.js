import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
        <Router>
          <Header/>
            <Switch>
              <Route path="/search">
                <SearchPage/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
             </Switch>
          <Footer/>
        </Router>
        
          {/* Banner */}
          {/* Cards */}
          {/* Footer */}
      {/* Search page */}
          {/* Header */}

    </div>
  );
}

export default App;
