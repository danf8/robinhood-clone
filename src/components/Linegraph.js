// import { BorderColor } from '@mui/icons-material';
import '../css/linegraph.css'
import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const Linegraph = () => {
    const [graphData, setGraphData] = useState([]);

    const createMockData = () => {
        let data = [];
        let value = 50;
        for(let i = 0; i < 366; i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0 ) * Math.random() * 10);
            data.push({x: date, y: value});
        }
        setGraphData(data);
    };


    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        scales: {
                x: {
                    display: false,
                    ticks: {
                      display: false,
                    },
            },
            y: {
                display: false,
                ticks: {
                    display: false,
                    // callback: (value) => value.toLocaleString(),
                },
            },
        },
    };

    const labels = graphData.map((d, i) => d.x.toLocaleDateString());

    useEffect(() => {
        createMockData()
    }, [])
// const dataGraph = graphData.map((d, i) => d.y);
    return(
        <div className="linegraph">
            <Line 
                data={{
                    labels: labels,
                    datasets: [
                        {
                            type: 'line',
                            data: graphData,
                            backgroundColor: 'black',
                            borderColor: '#5AC53B',
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0,0,0,0)',
                            pointBackgroundColor: 'rgba(0,0,0,0)',
                            pointHoverBackgroundColor: '#5AC53B',
                            pointHoverBorderColor: '#000000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6,
                        }
                    ]
                }}
                options={options}
            />
        </div>
    )
};

export default Linegraph;