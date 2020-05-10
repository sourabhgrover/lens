import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import ChartContainer from "./ChartContainer";

export default class HorizontalBarChart extends PureComponent {
  render() {
    var graphData = [];
    this.props.values.map((v) => {
      graphData.push({
        name: Object.keys(v)[0],
        value: Number(Object.values(v)[0]),
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

            <Bar dataKey="value" barSize={20} fill="#FFBB28" />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
  }
}
