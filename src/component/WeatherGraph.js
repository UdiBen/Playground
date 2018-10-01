import React, {Component} from 'react';
import {Chart} from "react-google-charts";
import moment from 'moment';

class WeatherGraph extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: []
        }
    }

    componentDidMount() {
        function fix(weatherData) {
            let maxVal = weatherData.reduce((max, p) => p[1] > max ? p[1] : max, weatherData[0][1]);

            let numbers = weatherData.map(item => item.concat(item[1] === maxVal
                ? 'point { size: 18; shape-type: star; fill-color: #a52714; visible:true; }'
                : null));

            numbers.unshift(["Hour", "Wind (mph)", {'type': 'string', 'role': 'style'}]);
            return numbers;
        }

        fetch('https://api2.climacell.co/v2/historical', {
            method: 'post',
            headers: new Headers({
                'apikey': 'S984VQLZqIKmB7bCS6YFaV9sRUBAtYY7',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "geocode": {
                    "lon": -71.303273,
                    "lat": 44.270587
                },
                "location_id": "",
                "start_time": "2018-03-19T00:00:00Z",
                "end_time": "2018-03-19T23:59:59Z",
                "timestep": 60,
                "fields": [
                    {
                        "name": "temp",
                        "units": "F"
                    },
                    {
                        "name": "wind_speed",
                        "units": "mph"
                    }
                ]
            })
        }).then(results => results.json())
            .then(result => {
                let data = result.map(x=> [ this.formatTime(x), x.wind_speed.value]);
                this.setState({weatherData: fix(data)});
            });
    }

    formatTime(x) {
        return moment(x.observation_time.value).format("HH:MM:ss");
    }

    render() {
        return (
            <div className={"wind-chart"}>
                <Chart
                    chartType="LineChart"
                    data={this.state.weatherData}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </div>
        );
    }
}

export default WeatherGraph;