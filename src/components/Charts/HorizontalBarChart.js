import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

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

const Title = styled.h3`
  text-align: center;
  padding: 1rem;
`;

const Separtor = styled.hr`
  width: 100%;
  margin-top: -1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
`;


const data = [
    {
        name: 'Page A', uv: 590, pv: 800, amt: 1400,
    },
    {
        name: 'Page B', uv: 868, pv: 967, amt: 1506,
    },
    {
        name: 'Page C', uv: 1397, pv: 1098, amt: 989,
    },
    {
        name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
    },
    {
        name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
    },
    {
        name: 'Page F', uv: 1400, pv: 680, amt: 1700,
    },
];

export default class HorizontalBarChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

    render() {
        return (
            <ResponsiveContainer>
                <Card>
                    <Title>Test</Title>
                    <Separtor />
                    <Content>

                        <ComposedChart
                            layout="vertical"
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 20, right: 20, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Legend />
                            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                            <Line dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>

                    </Content>
                </Card>
            </ResponsiveContainer>
        );
    }
}
