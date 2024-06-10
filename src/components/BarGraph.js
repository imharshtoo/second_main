import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div >
            <h1>Bar Graph</h1>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
            />
            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
                <h2>Reports</h2>
                <Bar data={data} width={500} height={300} />
            </div>
        </div>
    );
};

export default BarGraph;
