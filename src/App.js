import React, { Component } from 'react';
import logo from './img/logo-white.png';
import './sass/main.css';

class App extends Component {
  render() {
    return (
       <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo"></img>
            </div>
            <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Outdoors</span>
                <span className="heading-primary--sub">is where life happens</span>            
            </h1>

            <a href="#" className="btn btn--white btn--animated">Discover Our Tours</a>
        </div>
        </header>
    );
  }
}

export default App;
