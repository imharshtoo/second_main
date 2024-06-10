// src/components/Sentiment.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ReactWordcloud from 'react-wordcloud';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const barChartData = {
    labels: ['SOUND', 'SIZE', 'CONNECTIVITY', 'PRICE', 'NOISE', 'BATTERY', 'VOLUME', 'SUPPORT'],
    datasets: [
        {
            label: 'Sentiment for My products',
            data: [0.5, -0.2, 0.1, 0.3, 0.2, 0.4, 0.2, 0.1],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const barChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
            min: -1,
            max: 1,
        },
    },
};

const words = [
    { text: 'headphone', value: 64 },
    { text: 'sound', value: 40 },
    { text: 'quality', value: 30 },
    { text: 'battery', value: 20 },
    { text: 'noise', value: 20 },
    { text: 'volume', value: 20 },
    { text: 'price', value: 20 },
    { text: 'connectivity', value: 20 },
    { text: 'size', value: 20 },
    { text: 'support', value: 10 },
];

const Sentiment = () => {
    return (
        <div>
            <h1>Insights</h1>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <h2>Summary sentiment</h2>
                <Bar data={barChartData} options={barChartOptions} />
            </div>
            <div style={{ height: '300px', marginTop: '50px' }}>
                <ReactWordcloud words={words} />
            </div>
        </div>
    );
};

export default Sentiment;
