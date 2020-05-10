import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell
} from "recharts";

import ChartContainer from "./ChartContainer";

const COLORS = [
  "#765D69",
  "#FFBB28",
  "#FF8042",
  "#5E86A2",
  "#00D6AE",
  "#1C4C67",
  "#8DCFC6",
  "#FDFBD4",
  "#F2828D",
  "#0088",
];

export default class VerticalBarChart extends PureComponent {
  render() {
    var graphData = [];
    this.props.values.map((v) => {
      graphData.push({
        name: Object.keys(v)[0],
        'Intent Categories': Number(Object.values(v)[0]),
      });
    });
    return (
      <ResponsiveContainer>
        <ChartContainer title={this.props["name:"]}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={500}
              height={400}
              data={graphData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Intent Categories" >
                {graphData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ResponsiveContainer>
    );
  }
}
