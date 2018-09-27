import React, {Component} from 'react';
import cat from '../cat.png';
import Button from "./Button.js";

import './App.css';

class App extends Component {

    handleClick = () => {
        alert("udi");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={cat} className="App-logo" alt="logo"/>
                    <h1 className="app-title">When will my hat fly?!</h1>
                    <Button name="Find out" clickHandler={this.handleClick} />
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
