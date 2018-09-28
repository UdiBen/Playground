import React, {Component} from 'react';
import { Chart } from "react-google-charts";

class WeatherGraph extends Component {
    render() {
        return (
            <div className={"wind-chart"}>
                <Chart
                    chartType="LineChart"
                    data={[["Date", "Wind", {'type': 'string', 'role': 'style'}],
                        ["Sep 28", 5.5, null],
                        ["Sep 29", 12, 'point { size: 18; shape-type: star; fill-color: #a52714; visible:true; }']]}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </div>
        );
    }
}

export default WeatherGraph;