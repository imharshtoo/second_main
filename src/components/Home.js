import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['😱', '🤢', '😐', '😡', '🤬'],
    datasets: [
        {
            label: 'Emoji Reactions',
            data: [20, 40, 25, 10, 5],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    let history = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("harsh")) {
            history("/login");
        }
    }, [history]);

    return (
        <div>
            <h1>Home Page</h1>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
            />
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h2>Feeds</h2>
                <Bar data={data} options={options} width={400} height={300} />
            </div>
        </div>
    );
};

export default Home;
