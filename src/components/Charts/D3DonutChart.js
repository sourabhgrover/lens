import React, { Component } from 'react'
import * as d3 from 'd3';
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
const color = d3.scaleOrdinal()
  .domain(data.map(d => d.name))
  .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());
const pie = d3.pie()
  .padAngle(0.005)
  .sort(null)
  .value(d => d.value)
class D3DonutChart extends Component {


  componentDidMount() {
    // const data = [2, 4, 2, 6, 8];
    const data = [
      { name: "<5", value: 19912018 },
      { name: "5-9", value: 20501982 },
      { name: "10-14", value: 20679786 },
      { name: "15-19", value: 21354481 },
      { name: "20-24", value: 22604232 },
      { name: "25-29", value: 21698010 },
      { name: "30-34", value: 21183639 },
      { name: "35-39", value: 19855782 },
      { name: "40-44", value: 20796128 },
      { name: "45-49", value: 21370368 },
      { name: "50-54", value: 22525490 },
      { name: "55-59", value: 21001947 },
      { name: "60-64", value: 18415681 },
      { name: "65-69", value: 14547446 },
      { name: "70-74", value: 10587721 },
      { name: "75-79", value: 7730129 },
      { name: "80-84", value: 5811429 },
      { name: "≥85", value: 5938752 },
      ["name", "value"]
    ]
    this.drawBarChart(data)
  }
  drawBarChart(data) {
    const height = 500
    const width = 500


    // const canvasHeight = 400
    // const canvasWidth = 600
    // const scale = 20

    // const svgCanvasBar = d3.select(this.refs.barChart)
    //   .append('svg')
    //   .attr('width', 100)
    //   .attr('height', 400)
    //   .style('border', '1px solid black')
    //   ;

    // svgCanvasBar.selectAll('rect')
    //   .data(data).enter()
    //   .append('rect')
    //   .attr('width', 40)
    //   .attr('height', (datapoint) => datapoint * scale)
    //   .attr('fill', 'orange')
    //   .attr('x', (datapoint, iteration) => iteration * 45)
    //   .attr('y', (datapoint) => canvasHeight - datapoint * scale)

    const arcs = pie(data);

    const svg = d3.create("svg")
      .attr("viewBox", [-width / 2, -height / 2, width, height]);

    svg.selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .call(text => text.append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString()));
  }
  render() { return <Card ref="barChart"></Card> }
}
export default D3DonutChart