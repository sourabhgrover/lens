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
class D3BarChart extends Component {
    componentDidMount() {
        const data = [2, 4, 2, 6, 8]
        this.drawBarChart(data)
    }
    drawBarChart(data) {
        const canvasHeight = 400
        const canvasWidth = 600
        const scale = 20

        const svgCanvasBar = d3.select(this.refs.barChart)
            .append('svg')
            .attr('width', 100)
            .attr('height', 400)
            .style('border', '1px solid black')
            ;

        svgCanvasBar.selectAll('rect')
            .data(data).enter()
            .append('rect')
            .attr('width', 40)
            .attr('height', (datapoint) => datapoint * scale)
            .attr('fill', 'orange')
            .attr('x', (datapoint, iteration) => iteration * 45)
            .attr('y', (datapoint) => canvasHeight - datapoint * scale)
    }
    // render() { return <div ref="barChart"></div> }
    render() { return <Card ref="barChart"></Card> }
}
export default D3BarChart