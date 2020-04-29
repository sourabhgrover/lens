import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

class DoughnutChart extends React.Component {

    render() {

        const chartData = {
            datasets: [
                {
                    data: [10, 20, 30],
                    backgroundColor: ['blue', 'pink', 'grey'],
                    label: 'Hola',
                },
            ],
            // labels: ['Male', 'Female', 'Awaiting Details'],
        };
        return (

            <div>
                <Doughnut data={chartData} />
            </div>

        );
    }
}

export default DoughnutChart;