import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
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
export default class HorizontalBarChart extends PureComponent {
  render() {
    var graphData = [];
    this.props.values.map((v) => {
      graphData.push({
        name: Object.keys(v)[0],
        'Persona Categories': Number(Object.values(v)[0]),
      });
    });
    return (
      <ChartContainer title={this.props["name:"]}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={graphData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />

            <Bar dataKey="Persona Categories" barSize={20}  >
              {graphData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
  }
}
