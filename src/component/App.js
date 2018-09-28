import React, {Component} from 'react';
import cat from '../cat.png';
import Button from "./Button.js";
import WeatherGraph from "./WeatherGraph.js";
import './App.css';

class App extends Component {

    handleClick = () => {
       // WeatherGraph.load
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={cat} className="App-logo" alt="logo"/>
                    <h1 className="app-title">When will my hat fly?!</h1>
                    <Button name="Find out" clickHandler={this.handleClick} />
                </header>
                <WeatherGraph></WeatherGraph>
            </div>
        );
    }
}

export default App;
