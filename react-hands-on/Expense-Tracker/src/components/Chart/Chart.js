import React from "react";
import './Chart.css'
import { ChartBar } from "./ChartBar";

export const Chart = props => {
const Values = props.dataPoints.map((e)=> e.value);
    const max = Math.max(...Values) //passing array here with spread operator will convert the array into elements with comma
return <div className="chart">
    {props.dataPoints.map((point) => 
    <ChartBar key={point.label} 
    value={point.value} max={max}
     label={point.label} />)}
</div>
}