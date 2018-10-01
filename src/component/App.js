import React, {Component} from 'react';
import cat from '../cat.png';
import WeatherGraph from "./WeatherGraph.js";
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={cat} className="App-logo" alt="logo"/>
                    <h1 className="app-title">When will my hat fly?!</h1>
                </header>
                <WeatherGraph></WeatherGraph>
            </div>
        );
    }
}

export default App;
