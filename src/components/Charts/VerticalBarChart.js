import React, { PureComponent } from 'react';
import {
    BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import ChartContainer from "./ChartContainer"



export default class VerticalBarChart extends PureComponent {

    render() {

        var graphData = []
        this.props.values.map((v) => {

            graphData.push({
                name: Object.keys(v)[0], value: Number(Object.values(v)[0])
            });
        })
        return (
            <ResponsiveContainer>
                <ChartContainer title={this.props['name:']} >
                    <ResponsiveContainer width="100%" height={400} >
                        <BarChart
                            width={500}
                            height={400}
                            data={graphData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >

                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />

                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </ResponsiveContainer>
        );
    }
}
