import React, { Component } from 'react';
import * as d3 from "d3";

class BarChart extends Component {

    componentDidMount() {
        this.drawChart();

    }

    // DrawChart = (data) => {
    //     var w=900,
    //     h=500,
    //     p=30;

    //     const svg = d3.select("body")
    //         .append("svg")
    //         .attr("width", w)
    //         .attr("height", h)
    //         .attr("padding",p)
    //         .style("margin-left", 100);

    //     svg.selectAll("rect")
    //         .data(data)
    //         .enter()
    //         .append("rect")
    //         .attr("x", (d, i) => i * 70)
    //         .attr("y", (d, i) => h - 10 * d)
    //         .attr("width", 65)
    //         .attr("height", (d, i) => d * 10)
    //         .attr("fill", "green")

    //     svg.selectAll("text")
    //         .data(data)
    //         .enter()
    //         .append("text")
    //         .text((d) => d)
    //         .attr("x", (d, i) => i * 70)
    //         .attr("y", (d, i) => h - (10 * d) - 3)
    // }
    drawChart() {
        var w = 900,
            h = 500,
            p = 30;

        const data = [12, 5, 6, 6, 9, 10];

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}


export default BarChart;

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function (data) {
    var dataSet = data.data;
    BarChart(dataSet);
});